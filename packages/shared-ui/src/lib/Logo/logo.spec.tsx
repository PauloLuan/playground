import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Logo } from '.'
import theme from '../Theme'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/PauloLuan Playground/i).parentElement).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/PauloLuan Playground/i).parentElement).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render a normal logo by default when size is not passed', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/PauloLuan Playground/i).parentElement).toHaveStyle({
      width: '11rem',
      height: '3.3rem'
    })
  })

  it('should render a smaller logo when size is small', () => {
    renderWithTheme(<Logo size="small" />)
    expect(screen.getByLabelText(/PauloLuan Playground/i).parentElement).toHaveStyle({
      width: '6rem',
      height: '3rem'
    })
  })

  it('should render a bigger logo when size is large', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/PauloLuan Playground/i).parentElement).toHaveStyle({
      width: '20rem',
      height: '5.9rem'
    })
  })
})
