import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from '../pages'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  )
}
