import Axios, { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { Constants } from './../actions/constants';
import { IGetPocketReqToken, IPocketReqTokenRecvd } from './../actions/types';

export default function * watchPocketAPISaga() {
  yield takeLatest(Constants.GET_POCKET_REQUEST_TOKEN, function* getRequestToken(action: IGetPocketReqToken) {
    const newsSquirrelServer: string = process.env.REACT_APP_NEWSQUIRREL_SERVER+'';
    const consumerKey: string = process.env.REACT_APP_POCKET_API_CONSUMER_KEY as string;
    const redirectURI = 'http://localhost:3000';

    try {
      const response:AxiosResponse = yield Axios.post(`${newsSquirrelServer}/getPocketRequestToken`, {
        consumerKey,
        redirectURI,
      });

      yield put<IPocketReqTokenRecvd>({
        token: response.data.split('=')[1],
        type: Constants.POCKET_REQUEST_TOKEN_RECVD,
      });
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.error(error);      
    }
  });
}