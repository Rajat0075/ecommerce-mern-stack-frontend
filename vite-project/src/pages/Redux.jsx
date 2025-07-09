// import { useDispatch, useSelector } from 'react-redux'
// import { increment } from './counterSlice'
// import { store } from './store'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../counterSlice'
import { } from '../store'

import React from 'react'

export default function Redux() {
  const count = useSelector(store.counter.count)
  const dispatch = useDispatch()
  const incrementCount = () => {
    dispatch(increment())
  }
  return (
    <div>
      <button onClick={incrementCount()}>count: {count}</button>
    </div>
  )
}
