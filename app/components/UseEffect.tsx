import { useEffect } from 'react';

function Example() {
  useEffect(() => {
    document.title = 'Hello, World!';
  }, []);

  return <div>Hello, World!</div>;
}