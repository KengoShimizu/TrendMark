export type StateType = {
  sample: boolean
};

export type ActionType = {
  type: string;
  sample: boolean
};

export const Reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'sample':
      return { ...state, sample: action.sample };
    default:
      return state;
  }
}