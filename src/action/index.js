export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}
export const decNumber = (num) => {
    return {
        type: "DECREMENT",
        payload: num
    }
}
export const incPage = (num) => {
    return {
        type: "INCREMENTPAGE",
        payload: num
    }
}
export const decPage = (num) => {
    return {
        type: "DECREMENTPAGE",
        payload: num
    }
}

export const setPageDefault = () => {
    return {
        type: "SETPAGE1",
        // payload: num
    }
}
export const updatePageNo = (num) => {
    return {
        type: "UPDATE",
        payload: num
    }
}