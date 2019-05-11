import * as React from 'react'
import { HierarchyCircularNode } from 'd3-hierarchy'

export interface CircleProps {
  node: HierarchyCircularNode<{}>
}

export default class Circle extends React.Component<CircleProps, any> {
  private getFillColor = depth => {
    switch (depth) {
      case 0:
        return 'blue'
      case 1:
        return 'green'
      default:
        return 'wheat'
    }
  }

  public render() {
    const { node } = this.props
    return <circle cx={node.x} cy={node.y} r={node.r} fill={this.getFillColor(node.depth)} />
  }
}
