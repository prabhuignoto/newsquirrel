import {eventChannel} from 'redux-saga';
import {call, put, take} from 'redux-saga/effects'
import * as SailIOClient from 'sails.io.js';
import * as SocketIOClient from 'socket.io-client';

function socketInitChannel() {
  return eventChannel(emitter => {
    const io = SailIOClient(SocketIOClient);
    io.sails.autoConnect = false;
    io.sails.connect('http://localhost:1337');

    io.socket.get('/canBeLoaded', (body: any ) => {
      return emitter({type: 'RECVD_URL_CHECK', body});
    });

    return () => ({});
  })
}

export default function* watchSailsSocketSaga() {
  const channel = yield call(socketInitChannel);
  // tslint:disable-next-line:no-constant-condition
  while(true) {
    const action = yield take(channel);
    yield put(action);
  }
}