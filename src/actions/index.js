import * as types from "../constants/ActionTypes";

export const addHero = text => ({ type: types.ADD_HERO, text });
export const deleteHero = id => ({ type: types.DELETE_HERO, id });
export const saveHero = (id, name) => ({ type: types.SAVE_HERO, id, name });
