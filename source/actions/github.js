// @flow

import request from 'superagent';
import { get } from 'lodash';

export type SetRepositoriesAction = { type: 'SET_REPOSITORIES', repositories: RepositoryArray };
export type Action = SetRepositoriesAction;

export type SetRepositoryActionCreator = (repositories: RepositoryArray) => SetRepositoriesAction;

export const SET_REPOSITORIES = 'SET_REPOSITORIES';

export function setRepositories(repositories: RepositoryArray): SetRepositoriesAction {
  return {
    type: 'SET_REPOSITORIES',
    repositories
  };
}

export function getAsyncRepositories(): Function {
  return async (dispatch: Dispatch) => {
    try {
      let url = '/api/github/repositories';

      // FIXME: use configuration
      if (get(process, 'env.NODE_ENV') !== 'production') {
        url = `http://localhost:3333${url}`;
      }

      const response = await request.get(url);

      dispatch(setRepositories(response.body));
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
  };
}
