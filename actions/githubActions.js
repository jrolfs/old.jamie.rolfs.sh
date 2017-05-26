// @flow

import { getRepositories } from '../api/github';

export const SET_REPOSITORIES = 'SET_REPOSITORIES';

export function setRepositories(repositories: Array = []) {
  return {
    type: SET_REPOSITORIES,
    repositories
  };
}

export function getAsyncRepositories() {
  return async (dispatch) => {
    try {
      const repositories = await getRepositories();

      dispatch(setRepositories(repositories));
    } catch (error) {
      console.error(error);
    }
  };
}
