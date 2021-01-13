import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-signu-up.component';
import Header from './components/header/header-component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){

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
          console.log('SnapShot Data is ',snapShot.data());
          this.setState({ 
            currentUser: {
                id: snapShot.id,
                ...snapShot.data()
            }
          }, () => {
            console.log('State in App is:',this.state);
          });

        });
        
       }
       this.setState({currentUser: userAuth})//Setting it to null .
    
     });
  }

  componentWillUnmount() {
    console.log('Unmounding the App');
    this.unsubscribeFromAuth();
  }

  render(){
      return (
        <div>
          <Header  currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUp} />
          </Switch>
          

        </div>
        
      );
  }
}

export default App;
