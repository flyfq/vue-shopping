import { VIEW_NAV,VIEW_FOOT,VIEW_LOADING,CHECK_USER} from './types'

let mutations={ 
  [VIEW_NAV]:(state,payload)=>{state.bnav=payload},
	[VIEW_FOOT]:(state,payload)=>{state.bfoot=payload},
	[VIEW_LOADING]:(state,payload)=>{state.bloading=payload},
	[CHECK_USER]:(state,payload)=>{state.user.auth=payload}

};
export default mutations;
