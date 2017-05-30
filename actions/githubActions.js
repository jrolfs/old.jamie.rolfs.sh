// @flow

import fetch from 'isomorphic-fetch';

export const SET_REPOSITORIES = 'SET_REPOSITORIES';

export function setRepositories(repositories: Repositories) {
  return {
    type: SET_REPOSITORIES,
    repositories
  };
}

export function getAsyncRepositories() {
  return async (dispatch: Dispatch) => {
    try {
      const repositories = await fetch('http://localhost:3000/api/github/repositories');

      dispatch(setRepositories(await repositories.json()));
    } catch (error) {
      console.error(error);
    }
  };
}
