import produce from "immer";
import ActionsFavorite from "./const";

export default function favorite(state = [], action) {
  switch (action.type) {
    case ActionsFavorite.ADD_SUCCESS:
      return produce(state, (draft) => {
        draft.push(action.payload);
      });
    default:
      return state;
  }
}
