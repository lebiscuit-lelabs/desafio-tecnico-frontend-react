import ActionsFavorite from "./const";

export function addToFavoriteRequest(name) {
  return {
    type: ActionsFavorite.ADD_REQUEST,
    name,
  };
}

export function addToFavoriteSuccess(payload) {
  return {
    type: ActionsFavorite.ADD_SUCCESS,
    payload,
  };
}
