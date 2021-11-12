import { ActionTypes } from './types';

export default (state: any, action: any) => {
  console.log(state, action, 'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK');
  switch (action.type) {
    case ActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload.state,
      };
    default:
      return state;
  }
};
