// @flow

export const SET_SUBTITLE = 'SET_SUBTITLE';

export function setSubtitle(subtitle: String = 'software engineer') {
  return {
    type: SET_SUBTITLE,
    subtitle
  };
}
