import React from 'react'
import css from './Button.module.css'

export class Button extends React.Component {
  render() {
    return (
      <button className={css['button']} type='button' onClick={this.props.onClick}>Load more</button>
    )
  }
}

export default Button