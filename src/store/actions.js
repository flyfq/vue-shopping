import axios from 'axios';

import * as types from './types';

let actions={
  [types.VIEW_NAV]:({commit,state},payload)=>commit(types.VIEW_NAV,payload),
	[types.VIEW_FOOT]:({commit,state},payload)=>commit(types.VIEW_FOOT,payload),
	[types.VIEW_LOADING]:({commit,state},payload)=>commit(types.VIEW_LOADING,payload),
	[types.CHECK_USER]:({commit,state},payload)=>{
		return axios({
			url:"/data/user.json",
			params:{userTel:payload.userTel,password:payload.password}
		}).then(
		res=>{
		commit({type:types.CHECK_USER,user:res.data})
		return res.data.auth
		}
	  )
	}
};
export default actions;