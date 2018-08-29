import { AxiosResponse } from 'axios';
import Axios from 'axios';
import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import { IFrameData } from '../models/view/IAppState';
import { IQuickView } from '../models/view/IQuickView';
import { Constants } from './../actions/constants';
import { IRecvdFramelyRequestAction, ISendFramelyRequest } from './../actions/types';


export default function* watchIframeSaga() {
  yield takeLatest([Constants.SEND_IFRAMELY_REQUEST], function* sendIframelyRequest(action: ISendFramelyRequest){
    yield delay(500);
    const {url} = action;

    try {
      const server = process.env.REACT_APP_IFRAMELY_SERVER
      const key = process.env.REACT_APP_IFRAMELY_API_KEY;
      const iframelyUrl = `${server}${url}&api_key=${key}`;
      const promise: AxiosResponse = yield Axios.get(iframelyUrl, {
        timeout: 5000,
      });
      const data:IFrameData = promise.data as IFrameData;
      const {meta: {date, description, site, title}, links:{logo, thumbnail}}:any = data;
      const sanitize = (val: any) => val ? val: '';

      const transfData:IQuickView = {
        date: sanitize(date),
        description,
        logoURL: logo && logo.length > 0 ? logo[0].href: '',
        site,
        thumbnailURL: thumbnail && thumbnail.length > 0 ? thumbnail[0].href : '',
        title,
        url: data.url,
      }
      yield put<IRecvdFramelyRequestAction>({
        data: transfData,
        type: Constants.IFRAMELY_REQUEST_RECEIVED,
      })
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.error(error)
    }
  })
}