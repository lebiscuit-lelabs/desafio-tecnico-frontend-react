import ActionsData from "./const";

export function loadDataRequest(params) {
  return {
    type: ActionsData.REQUEST,
    params,
  };
}

export function loadDataSuccess(payload) {
  return {
    type: ActionsData.REQUEST_SUCCESS,
    payload,
  };
}

export function loadDataFailure() {
  return {
    type: ActionsData.REQUEST_FAILURE,
  };
}

export function getCharacterByHouse(params) {
  return {
    type: ActionsData.GET_CHARACTER_BY_HOUSE,
    params,
  };
}

export function getCharacterByHouseSuccess(payload) {
  return {
    type: ActionsData.GET_CHARACTER_BY_HOUSE_SUCCESS,
    payload,
  };
}

export function getCharacterByName(params) {
  return {
    type: ActionsData.GET_CHARACTER_BY_NAME,
    params,
  };
}

export function getCharacterByNameSuccess(payload) {
  return {
    type: ActionsData.GET_CHARACTER_BY_NAME_SUCCESS,
    payload,
  };
}

export function getCharacterByNameFailure(payload) {
  return {
    type: ActionsData.GET_CHARACTER_BY_NAME_FAILURE,
    payload,
  };
}
