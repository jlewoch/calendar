import { createAction } from 'redux-act';
import * as types from './actionTypes';

export const addEvent = createAction(types.ADD_EVENT);
export const addedEvent = createAction(types.ADDED_EVENT);
export const updateEvent = createAction(types.UPDATE_EVENT);
export const updatedEvent = createAction(types.UPDATED_EVENT);
export const removeEvent = createAction(types.REMOVE_EVENT);
export const removedEvent = createAction(types.REMOVED_EVENT);
export const changeViewingMonth = createAction(types.CHANGE_VIEWING_MONTH);
export const changeViewingYear = createAction(types.CHANGE_VIEWING_YEAR);
