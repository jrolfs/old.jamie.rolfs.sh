// @flow
/* eslint-disable import/prefer-default-export */

export type SetSubtitleAction = { type: 'SET_SUBTITLE', subtitle: string };
export type Action = SetSubtitleAction;

export type SetSubtitleActionCreator = (subtitle: string) => SetSubtitleAction;

export const SET_SUBTITLE = 'SET_SUBTITLE';

export function setSubtitle(subtitle: string = 'software engineer'): SetSubtitleAction {
  return {
    type: 'SET_SUBTITLE',
    subtitle
  };
}
