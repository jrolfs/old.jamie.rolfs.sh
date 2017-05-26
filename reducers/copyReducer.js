// @flow

import { SET_SUBTITLE } from '../actions/copyActions';

export default function copyReducer(state: Object = { subtitle: '' }, action: Object) {
  switch (action.type) {
    case SET_SUBTITLE:
      return Object.assign({}, state, { subtitle: action.subtitle });
    default:
      return state;
  }
}
