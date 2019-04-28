import * as React from 'react'

export interface IReactD3CirclePackProps {}
export interface IReactD3CirclePackState {}

export default class ReactD3CirclePack extends React.Component<
  IReactD3CirclePackProps,
  IReactD3CirclePackState
> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <svg />
      </div>
    )
  }
}
