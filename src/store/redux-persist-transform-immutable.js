import Immutable from 'seamless-immutable'
import { createTransform } from 'redux-persist'

// is this object already Immutable?
const isImmutable = d => typeof d === 'object' && !!d.asMutable

// change this Immutable object into a JS object
const convertToJs = state => state.asMutable({ deep: true })

// optionally convert this object into a JS object if it is Immutable
const fromImmutable = d => isImmutable(d) ? convertToJs(d) : d

// convert this JS object into an Immutable object
const toImmutable = raw => Immutable(raw)

module.exports = function (config) {
  config = config || {}

  return createTransform(raw => fromImmutable(raw), state => {
    // --- HACKZORZ ---
    // Attach a empty-ass function to the object called mergeDeep.
    // This tricks redux-persist into just placing our Immutable object into the state tree
    // instead of trying to convert it to a POJO
    // https://github.com/rt2zz/redux-persist/blob/master/src/autoRehydrate.js#L55
    //
    // Another equal terrifying option would be to try to pass their other check
    // which is lodash isPlainObject.
    // --- END HACKZORZ ---
    if (!state.asMutable) {
      state.mergeDeep = d => JSON.parse(JSON.stringify(d))
    } else {
      state.set('mergeDeep', d => JSON.parse(JSON.stringify(d)))
    }
    return toImmutable(state)
  }, config)
}
