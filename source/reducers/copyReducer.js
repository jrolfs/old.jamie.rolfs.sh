// @flow

import { SET_SUBTITLE } from '../actions/copy';

import type { Action } from '../actions/copy';

export type State = { subtitle: string };

export default function copyReducer(state: State = { subtitle: '' }, action: Action): State {
  switch (action.type) {
    case SET_SUBTITLE:
      return Object.assign({}, state, { subtitle: action.subtitle });
    default:
      return state;
  }
}
