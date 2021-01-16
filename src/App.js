import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-signu-up.component';
import Header from './components/header/header-component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props; 

     //register observer to users login state .when user logins we save the 
     //user to the firestore DB if it is a new user .We massage the data we
     //return and save it in State .
     this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
              
       if(userAuth){
        console.log('userAuth is:',userAuth);
        //Save the user in the Firebase database if they don't exist.
        //Return only what is needed id,email,dispalyName
        const userRef = await createUserProfileDocument(userAuth);
        const userData = await userRef.get();
        console.log('USER DATA IS:',userData.data());
        //allows us to listen if the document (data) exists or any changes to the document
        userRef.onSnapshot( (snapShot) => {
          
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          )

        });
        
       }//end if
       
       setCurrentUser(userAuth)//Setting it to null .
    
     });
  }

  componentWillUnmount() {
    console.log('Unmounding the App');
    this.unsubscribeFromAuth();
  }

  render(){
      return (
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUp} />
          </Switch>
          

        </div>
        
      );
  }
}

//dispatch is a redux function that passes the returned value
//from setCurrentUser(user) action to our reducers.mapDispatchToProps makes
//the prop setCurrentUser available as a prop.
const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps )(App);
