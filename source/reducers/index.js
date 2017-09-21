// @flow

import { combineReducers } from 'redux';

import copy from './copyReducer';
import github from './githubReducer';

import type { State as CopyState } from './copyReducer';
import type { State as GithubState } from './githubReducer';

export type Store = {
  copy: CopyState,
  github: GithubState
};

export default combineReducers({
  copy,
  github
});
