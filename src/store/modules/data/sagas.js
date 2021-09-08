import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "../../../services/baseUrl";
import {
  loadDataSuccess,
  loadDataFailure,
  getCharacterByHouseSuccess,
  getCharacterByNameSuccess,
  getCharacterByNameFailure,
} from "./actions";
import ActionsData from "./const";

function* loadData() {
  const characters = yield all([
    call(api.get, "/show/characters/bySlug/Daenerys_Targaryen"),
    call(api.get, "/show/characters/bySlug/Jon_Snow"),
    call(api.get, "/show/characters/bySlug/Eddard_Stark"),
    call(api.get, "/show/characters/bySlug/Tyrion_Lannister"),
    call(api.get, "/show/characters/bySlug/Ramsay_Bolton"),
    call(api.get, "/show/characters/bySlug/Sansa_Stark"),
    call(api.get, "/show/characters/bySlug/Cersei_Lannister"),
    call(api.get, "/show/characters/bySlug/Joffrey_Baratheon"),
  ]);

  let dataCharacters = [];
  for (var i = 0; i < 8; i++) {
    dataCharacters.push(characters[i].data);
  }

  const houses = yield all([
    call(api.get, "/show/houses/House Targaryen"),
    call(api.get, "/show/houses/House Stark"),
    call(api.get, "/show/houses/House Lannister"),
    call(api.get, "/show/houses/House Martell"),
    call(api.get, "/show/houses/House Baratheon"),
    call(api.get, "/show/houses/House Tyrell"),
  ]);

  let dataHouses = [];
  for (var y = 0; y < 6; y++) {
    dataHouses.push(...houses[y].data);
  }

  const data = {
    dataCharacters,
    dataHouses,
  };

  if (dataCharacters && dataHouses) {
    yield put(loadDataSuccess(data));
  } else {
    yield put(loadDataFailure());
  }
}

function* getDataByHouse(payload) {
  const { params } = payload;

  const charactersByHouse = yield call(
    api.get,
    `show/characters/byHouse/${params}`
  );
  const { data, status } = charactersByHouse;

  if (status) {
    yield put(getCharacterByHouseSuccess(data));
  }
}

function* getDataByName(payload) {
  try {
    const { params } = payload;
    const charactersByName = yield call(api.get, `/show/characters/${params}`);
    const { data } = charactersByName;

    yield put(getCharacterByNameSuccess([data]));
  } catch (error) {
    yield put(getCharacterByNameFailure(error));
  }
}

export default all([
  takeLatest(ActionsData.REQUEST, loadData),
  takeLatest(ActionsData.GET_CHARACTER_BY_HOUSE, getDataByHouse),
  takeLatest(ActionsData.GET_CHARACTER_BY_NAME, getDataByName),
]);
