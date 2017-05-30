// @flow

export const SET_SUBTITLE = 'SET_SUBTITLE';

export function setSubtitle(subtitle: string = 'software engineer'): SetSubtitleAction {
  return {
    type: SET_SUBTITLE,
    subtitle
  };
}
