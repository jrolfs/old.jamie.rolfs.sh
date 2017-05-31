// @flow

import { get } from 'lodash';
import fetch from 'isomorphic-fetch';
import routes from '../../config/routes.json';

import * as actionTypes from '../types/github';

export function setRepositories(repositories: RepositoryArray): SetRepositoriesAction {
  return {
    type: actionTypes.SET_REPOSITORIES,
    repositories
  };
}

export function getAsyncRepositories(): Function {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(`http://localhost:3000${get(routes, 'github.repositories')}`);

      dispatch(setRepositories(await response.json()));
    } catch (error) {
      console.error(error);
    }
  };
}
