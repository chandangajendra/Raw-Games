import changeTheNumber from "./upDown";
import handlePageNo from "./handlePage"
import { combineReducers } from "redux";

const rootReduer = combineReducers({
    changeTheNumber,
    handlePageNo
})

export default rootReduer;