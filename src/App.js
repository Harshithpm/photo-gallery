import React, { useContext } from 'react';
import { Router } from '@reach/router';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProfilePage from './components/ProfilePage';
import PasswordReset from './components/PasswordReset';
import { UserContext } from './providers/UserProvider';

function App() {
  const user = useContext(UserContext);
  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <SignUp path='signUp' />
      <SignIn path='/' />
      <PasswordReset path='/passwordReset' />
    </Router>
  );
}

export default App;
