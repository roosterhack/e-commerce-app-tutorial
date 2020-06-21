import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { CheckoutPage } from './pages/checkout/Checkout.component';
import { setCurrentUser } from './redux/user/userAction';

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      }
      dispatch(setCurrentUser(userAuth));
    });

    return () => unsubscribeFromAuth();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          path='/signin'
          exact
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
