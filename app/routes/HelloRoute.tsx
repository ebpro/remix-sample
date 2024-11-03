// File: app/routes/HelloRoute.tsx
import MyComponent from '~/components/MyComponent';
import MyClassComponent from '~/components/MyClassComponent';
import ExampleComponent from '~/components/ExampleComponent';
import Greetings from '~/components/Greetings';
import Counter from '~/components/Counter';
import ThemedButton from '~/components/ThemedButton';
import CounterWithReducer from '~/components/CounterWithReducer';


export default function HelloRoute() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <MyComponent />
      <MyClassComponent />
      <ExampleComponent />

      <Greetings />
      <Greetings name="John" />

      <Counter />

      <ThemedButton />

      <CounterWithReducer />

    </div>
  );
}