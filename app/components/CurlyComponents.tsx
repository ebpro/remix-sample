const name = 'John';
const element1 = <h1>Hello, {name}!</h1>;

function formatName(user: { firstName: any; lastName: any; }) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
  const element2 = <h1>Hello, {formatName(user)}!</h1>;

  const isLoggedIn = true;
  const element = (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );