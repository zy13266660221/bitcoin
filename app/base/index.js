/**
 * Created by zy on 2017/11/25.
 */


import ROUTER from '../constants/router';
import { ACTION_FUNCS } from './action';
import baseReducer from './reducer';
import baseStore from './store';
import urlUtils from '../utils/urlUtils';
export { baseReducer, baseStore }


const queryParams = urlUtils.getQueryParams();
if(queryParams.login == 'no'){
    console.log('没有登录');
    window.location.href = ROUTER.USER_LOGIN;
}

export function baseStart(store) {
    ACTION_FUNCS.getBaseInfo()(store.dispatch, store.getState);
}

