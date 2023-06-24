const intialPage = 1;

const handlePageNo = (state = intialPage, action) => {
    switch (action.type) {
        case "INCREMENTPAGE": return state + action.payload;
        case "DECREMENTPAGE": return state - action.payload;
        case "SETPAGE1": return 1;
        case "UPDATE": return action.payload;
        default: return state;
    }
}

export default handlePageNo;