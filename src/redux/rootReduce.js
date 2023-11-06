import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./Slices/app"
import authReducer from "./Slices/auth";
const rootPersistConfig={
    key:"root",
    storage,
    keyPrefix:"redux-",

}
const rootReducer=combineReducers({
    app:appReducer,
    auth:authReducer,
    
})
export {rootPersistConfig, rootReducer};