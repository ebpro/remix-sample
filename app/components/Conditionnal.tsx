
const isLoggedIn = true;
const element = (
  <div>
    {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
  </div>
);