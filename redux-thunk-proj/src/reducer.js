//reducer: é um metodo que recebe um estado e uma action

const INITIAL_STATE = {
  data: [],
  isFetching: false
}

export const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'LOAD_DATA'){

  }
  return state
}