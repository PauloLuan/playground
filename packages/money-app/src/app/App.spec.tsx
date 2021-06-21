import { render, screen } from '@testing-library/react'
import { App } from './App'

jest.mock('./routes', () => ({
  __esModule: true,
  Routes: function Mock() {
    return <div data-testid="routes" />
  }
}))

describe('<App />', () => {
  it('should render routes', () => {
    render(<App />)
    expect(screen.getByTestId('routes')).toBeInTheDocument()
  })
})
