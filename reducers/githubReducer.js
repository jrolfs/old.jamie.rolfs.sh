// @flow

import { SET_REPOSITORIES } from '../actions/types/github';

export default function githubReducer(state: Object = { repositories: [] }, action: Object) {
  switch (action.type) {
    case SET_REPOSITORIES:
      return Object.assign({}, state, { repositories: action.repositories });
    default:
      return state;
  }
}
