import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  
  const toggleCounterHandler = () => {};

  const incrementHandler = ()=>{
    dispatch({type:'incrementby2'});
  }

  const decrementHandler = ()=>{
    dispatch({type: 'decrementby2'});
  }

  const incrementBy5Handler = ()=>{
    dispatch({type: 'incrementBy5'});
  }

  const decrementBy5Handler = ()=>{
    dispatch({type: 'decrementBy5'});
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment By 2</button>
        <button onClick={decrementHandler}>Decrement By 2</button>
        <button onClick={incrementBy5Handler}>Increment By 5</button>
        <button onClick={decrementBy5Handler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
