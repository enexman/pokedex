import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import IndexPage from './components/IndexPage'
import PageNotFound from './components/PageNotFound'
import PokemonPage from './components/PokemonPage'

export const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={IndexPage} />
      <Route path='/pokemon/:id' component={PokemonPage} />
    </Route>
    <Route path='*' component={PageNotFound} />
  </Router>
)
