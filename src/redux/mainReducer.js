import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2191766Reducer from '../features/SignIn2191766/redux/reducers'
import SignUp2291765Reducer from '../features/SignUp2291765/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2191766: SignIn2191766Reducer,
SignUp2291765: SignUp2291765Reducer,

});