import * as React from 'react'

export interface IReactD3CirclePackProps {
  name: string
}
export interface IReactD3CirclePackState {
  NAME: string
}

export default class ReactD3CirclePack extends React.Component<
  IReactD3CirclePackProps,
  IReactD3CirclePackState
> {
  constructor(props) {
    super(props)
    this.state = {
      NAME: `${this.props.name.split('')}`
    }
  }

  render() {
    return <div>{`Hello ${this.state.NAME}, you fabulous hummingbird!`}</div>
  }
}
