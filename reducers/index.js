import { combineReducers } from 'redux';

import copy from './copyReducer';
import github from './githubReducer';

export default combineReducers({
  copy,
  github
});
