// @flow

import { SET_REPOSITORIES } from '../actions/github';

import type { Action } from '../actions/github';

export type State = { +repositories: RepositoryArray };

export default function githubReducer(state: State = { repositories: [] }, action: Action) {
  switch (action.type) {
    case SET_REPOSITORIES:
      return Object.assign({}, state, { repositories: action.repositories });
    default:
      return state;
  }
}
