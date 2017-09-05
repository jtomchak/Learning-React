import * as types from "../constants/ActionTypes";

export const addHero = text => ({ type: types.ADD_HERO, text });
export const deleteHero = id => ({ type: types.DELETE_HERO, id });
export const editHero = (id, text) => ({ type: types.EDIT_HERO, id, text });
