import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Login } from '../pages'
// import { PrivateRoute } from '../auth'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        {/* <PrivateRoute path="/teste" component={Protected} /> */}
      </Switch>
    </Router>
  )
}
