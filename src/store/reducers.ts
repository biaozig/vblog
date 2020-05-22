import { Reducer, State } from './types';


// 设定初始值
export const initialState: State = {
    agents: [],
    notice: {
        loading: undefined,
        newResourceAgentId: undefined // 当前打正在添加 resource 的 agent ID
    }
}


const reducer:Reducer = (state:any, action:any) => {

    switch(action.type){
        case 'add':
            return action.value;
        default:
            return state;
    }
}

export default reducer;