import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = ()=>{
    // dispatch({type:'incrementby2', amount: 2});
    dispatch(counterActions.increment());
  }

  const decrementHandler = ()=>{
    // dispatch({type: 'decrementby2'});
    dispatch(counterActions.decrement());
  }

  const incrementBy5Handler = ()=>{
    // dispatch({type: 'incrementBy5'});
    dispatch(counterActions.increase(5)); //{ type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
  }

  // const decrementBy5Handler = ()=>{
  //   dispatch({type: 'decrementBy5'});
  // }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementBy5Handler}>Increment By 5</button>
        {/* <button onClick={decrementBy5Handler}>Decrement By 5</button> */}
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
