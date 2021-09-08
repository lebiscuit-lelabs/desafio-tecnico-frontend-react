import { call, select, put, all, takeLatest } from "redux-saga/effects";
import toast from "react-hot-toast";

import api from "../../../services/baseUrl";

import { addToFavoriteSuccess } from "./actions";
import ActionsFavorite from "./const";

function* addToFavorite({ name }) {
  const characterExists = yield select((state) =>
    state.favorite.find((character) => character.name === name)
  );

  if (characterExists) {
    toast.error(`${name} is already on the list of favorites`);
  } else {
    const response = yield call(api.get, `/show/characters/${name}`);

    const data = {
      ...response.data,
    };

    yield put(addToFavoriteSuccess(data));
    toast.success(`${name} has been added to the favorites list`);
  }
}

export default all([takeLatest(ActionsFavorite.ADD_REQUEST, addToFavorite)]);
