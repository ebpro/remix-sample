Greeting.defaultProps = {
  name: 'Guest'
};

type GreetingProps = {
  readonly name?: string;
};

export default function Greeting(props: GreetingProps) {
      return <h1>Hello, {props.name}</h1>;
    }

