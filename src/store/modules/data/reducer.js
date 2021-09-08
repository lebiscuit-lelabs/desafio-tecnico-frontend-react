import produce from "immer";
import ActionsData from "./const";

const INITIAL_STATE = {
  dataCharacters: [],
  dataHouses: [],
  isLoading: false,
  hasError: false,
};

export default function data(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionsData.REQUEST:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    case ActionsData.REQUEST_SUCCESS:
      return produce(state, (draft) => {
        draft.dataCharacters = action.payload.dataCharacters;
        draft.dataHouses = action.payload.dataHouses;
        draft.isLoading = false;
      });
    case ActionsData.REQUEST_FAILURE: {
      return produce(state, (draft) => {
        draft.hasError = true;
        draft.isLoading = false;
      });
    }
    case ActionsData.GET_CHARACTER_BY_HOUSE:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    case ActionsData.GET_CHARACTER_BY_HOUSE_SUCCESS:
      return produce(state, (draft) => {
        draft.dataCharacters = action.payload;
        draft.isLoading = false;
      });
    case ActionsData.GET_CHARACTER_BY_NAME:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    case ActionsData.GET_CHARACTER_BY_NAME_SUCCESS:
      return produce(state, (draft) => {
        draft.dataCharacters = action.payload;
        draft.isLoading = false;
      });
    case ActionsData.GET_CHARACTER_BY_NAME_FAILURE:
      return produce(state, (draft) => {
        draft.dataCharacters = [];
        draft.isLoading = false;
        draft.hasError = true;
      });
    default:
      return state;
  }
}
