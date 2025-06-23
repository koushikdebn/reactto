import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment  } from '../app/ActionCreator'; // Ensure the path matches your structure

export default function Test() {
  const count = useSelector((state) => state.counter.value); // Matches the "counter" key in the store
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
