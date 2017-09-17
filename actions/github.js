// @flow

import { get } from 'lodash';
import fetch from 'isomorphic-fetch';

import routes from '../config/routes.json';

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
      const response = await fetch(`http://localhost:3000${get(routes, 'github.repositories')}`);

      dispatch(setRepositories(await response.json()));
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
  };
}
