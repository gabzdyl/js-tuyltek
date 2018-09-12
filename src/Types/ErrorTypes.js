// @flow
export type AllErrorType = {
  error: string,
  type: number,
  action: string,
  time: Date,
}

export type ErrorType = {
  error: string,
  type: number,
  time: Date,
}

export type ErrorTypeType = 0 | 1 | 2
