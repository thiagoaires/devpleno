import counterReducer from './reducer';


test('reducer increment', () =>{
  let initialState = {count: 0}
  let action = {type: 'INCREMENT', value: 10}
  let state = counterReducer(initialState, action)
  expect(state).toEqual({count: 10})
})

test('reducer decrement', () => {
  let initialState= {count: 0}
  let action = {
    type: 'DECREMENT', value: 20
  }
  let state = counterReducer(initialState, action)
  expect(state).toEqual({count: -20})
})

test('reducer undefined', () => {
  let initialState = {count: 0}
  let action = {
    type: '', value: 12
  }
  let state = counterReducer(initialState, action)
  expect(state).toEqual({count: 0})
})