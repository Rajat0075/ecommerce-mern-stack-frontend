// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, selectCount } from '../../counterSlice'
// import { store } from ''

export default function Counter() {
    // const count = useSelector((state) => state.counter.count)
    // const dispatch = useDispatch()
        const count = useSelector(store.counter.count)
    const dispatch = useDispatch()
    const incrementCount = () => {
        dispatch(increment())
    }
    return (
        <div>
            <button onClick={incrementCount}>count: {count}</button>
            {/* <div className='container'>
                <button aria-label='Increment Value' onClick={() => dispatch(increment())}>Add One</button>
            </div>
            <h2>Cou nter: <span style={{ color: 'black' }}>{counter}</span></h2>
            <div>
                <button aria-label='Decrement Value' onClick={() => dispatch(decrement())}>Delete One</button>
            </div> */}
        </div>
    )
}
