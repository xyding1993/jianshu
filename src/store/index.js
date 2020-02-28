/*
 * @Author: Yang
 * @Date: 2020-02-28 20:52:53
 * @LastEditors: Yang
 * @LastEditTime: 2020-02-28 21:04:28
 * @Descripttion: 
 * @FilePath: /jianshu/src/store/index.js
 */

import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;


