import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './composants/interface/Header'
import Liste from './composants/Liste'
import Contenu from './composants/Contenu'
import { Provider } from './Context'
import AddContact from './composants/contact/AddContact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import APropos from './composants/pages/APropos'
import Error from './composants/pages/Error'

class App extends Component {
  render () {
    return (
      <Provider>
        <Router>
          <div className='App'>
            <Header />
            <div className='container'>
              <Switch>
                <Route exact path='/liste' component={Liste} />
                <Route exact path='/ajoute' component={AddContact} />
                <Route exact path='/' component={Liste} />
                <Route exact path='/apropos' component={APropos} />
                <Route component={Error} />
              </Switch>
              <Contenu />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
