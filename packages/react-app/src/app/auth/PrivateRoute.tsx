import { ReactNode } from 'react'
import { Redirect, Route, RouteComponentProps } from 'react-router-dom'

const isAuthenticated = () => false

export type PrivateRouteProps = {
  component: ReactNode
} & RouteComponentProps

export const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          Component
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}
