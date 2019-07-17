/* const createStore = function(reducer){
    let state;
    let listeners = [];

    let getState = () => state;
    
    let subscribe = (listener) => {
        listeners.push(listener)
        return ()=>{
            listeners = listeners.map((l) =>l !==listener)
        };
    }

    let dispatch = function(action) {
        state = reducer(action);
        listeners.forEach((l)=>l())
    }

    dispatch();
    return{
        getState,
        dispatch,
        subscribe
    }
} */

const createStore = function(initState) {
    let state = initState;
    let listeners = [];

    // 订阅
    let subscribe = (listener) => {
        listeners.push(listener);
    }

    // 变化
    let changeState = (newState) => {
        state = newState;
        // 通知
        listeners.forEach((l) => l());
    }

    // 获取
    let getState = ()=> state;

    return{
        getState,
        changeState,
        subscribe
    }
}

export default createStore;