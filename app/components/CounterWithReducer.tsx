// File: app/components/CounterWithReducer.tsx
import { useReducer } from 'react';

type State = {
  count: number;
};

type Action = 
  | { type: 'increment' }
  | { type: 'decrement' };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unknown action type');
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center p-4">
      <p className="text-xl mb-4">Count: {state.count}</p>
      <div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          onClick={() => dispatch({ type: 'increment' })}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch({ type: 'decrement' })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterWithReducer;