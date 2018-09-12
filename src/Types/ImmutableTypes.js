// @flow
import type { ValueObject } from './ValuesType'

export type DeepMergeType = {
  deep: boolean,
}

export type IteratorFunctionType = (value: ValueObject) => ValueObject

export type ObjectCreatorType = [string, ValueObject]

export type IteratorFunctionAsObjectType = (value: ValueObject) => ObjectCreatorType

export type ImmutableType<T> = {
  from: (data: ValueObject) => ImmutableType<T>,
  isImmutable: (data?: ValueObject) => boolean,
  merge: (data: ValueObject, deepMerge?: DeepMergeType) => ImmutableType<T>,
  replace: (data: ValueObject, deepMerge?: DeepMergeType) => ImmutableType<T>,
  without: (without: string | Array<string>) => ImmutableType<T>,
  asMutable: (deepMerge?: DeepMergeType) => ValueObject,
  set: (key: string, value: ValueObject) => ImmutableType<T>,
  setIn: (keyPath: Array<string>, value: ValueObject, deepMerge?: DeepMergeType) => ImmutableType<T>,
  update: (key: string, updater: Function, ...functionArguments: ValueObject) => ImmutableType<T>,
  updateIn: (keyPath: Array<string>, updater: Function, ...functionArguments: ValueObject) => ImmutableType<T>,
  getIn: (keyPath: Array<string>, defaultValue?: ValueObject) => ValueObject,
  flatMap: (func: IteratorFunctionType) => ImmutableType<T>
  asObject: (func: IteratorFunctionAsObjectType) => ImmutableType<T>,
}

export type AsMutable<T> = {
  asMutable: () => T
}

export type AsMutableString = string & AsMutable<string>
export type AsMutableArray = Array<any> & AsMutable<Array<any>>
