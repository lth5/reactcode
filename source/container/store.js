import { createStore } from 'redux';

const reducer = (state, action) => {
    if(!state){
		state = {
			count:1
		}
	}
	switch (action.type) {
		case "add":
			return {
				count : ++state.count,
				...state
			}
	
		case "shift":
		return {
			count : --state.count,
			...state
		}
	
		default:
			return state;
	}
    
};
export default createStore(reducer);



