// @flow

declare type SetSubtitleAction = {
  type: string,
  subtitle: string
}

declare type SetSubtitleActionCreator = (subtitle: string) => SetSubtitleAction;
