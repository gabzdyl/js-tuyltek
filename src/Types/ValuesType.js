// @flow
export type Values = {
  [name: string]: string | number;
}

export type ValueObject = {
  [key: string]: ValueObject | string | number | Function | Array
}
