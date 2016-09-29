/*
 * It's redux! I'm reimplementing it for fun.
 */

const Redux = reducer => {
  let store = reducer()

  const dispatcher = action => {
    store = reducer(store, action)
  }

  const dispatch = action => {
    if (typeof action === 'function') {
      action(dispatcher)
    } else {
      dispatcher(action)
    }
  }

  return {
    dispatch: dispatch,
    getState: () => store
  }
}

const selfOrEmpty = obj => obj === undefined ? {} : obj

const exampleReducer = (state, action) => {
  state = selfOrEmpty(state)
  action = selfOrEmpty(action)
  switch (action.type) {
    case 'FIRST_TYPE':
      return Object.assign({}, state, {
        firstType: action.payload
      })
    case 'SECOND_TYPE':
      return Object.assign({}, state, {
        secondType: action.payload
      })
    default:
      return state
  }
}

module.exports = { Redux, exampleReducer }
