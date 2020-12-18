import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (
    <div>Hats page</div>
  )
}

const HatsPageDetail = () => {
  return (
    <div>Hats page Detail</div>
  )
}


function App() {

 
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
        <Route path="/hats/detail" component={HatsPageDetail} />
      </Switch>
    </div>
    
  );
}

export default App;
