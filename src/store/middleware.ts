import { State, Action } from './types';

const applyMiddleware = (
    state: State,
    dispatch: React.Dispatch<Action>
    ) => async (action: Action) => {
  // middleware 逻辑
    switch (action.type) {
        case 'AGENTS_FETCH': {
        
            return state;
        }
        default:
            return state;
    }

  // 继续默认的 dispatch 逻辑
  dispatch(action);
};

export default applyMiddleware;
