import {increment, decrement} from './Actions'

//Testar se action passa os parametros corretamente

test('action: INCREMENT', () => {
  let incr = increment(10)
  expect(incr).toEqual({
    type: 'INCREMENT',
    value: 10
  })
})

test('action: DECREMENT', () => {
  let decr = decrement(10)
  expect(decr).toEqual({
    type: 'DECREMENT',
    value: 10
  })
})