// @flow
/* eslint-disable import/prefer-default-export */

import * as actionTypes from '../types/copy';

export function setSubtitle(subtitle: string = 'software engineer'): SetSubtitleAction {
  return {
    type: actionTypes.SET_SUBTITLE,
    subtitle
  };
}
