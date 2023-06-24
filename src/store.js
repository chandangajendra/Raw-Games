import { createStore } from "redux"

import rootReduer from "./reducer/index"

const store = createStore(rootReduer);

export default store;