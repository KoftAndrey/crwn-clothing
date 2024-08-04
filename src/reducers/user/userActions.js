import USER_ACTION_TYPES from "./userActionTypes";
import { createAction } from "../../utils/reducer/reducer";

const setCurrentUser = user => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export { setCurrentUser };
