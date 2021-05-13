import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//Importing the CSS file and the bootstrap css
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Importing the components here
import Layout from './components/layouts/Layout';
import ListView from './components/ListView';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <ListView />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
