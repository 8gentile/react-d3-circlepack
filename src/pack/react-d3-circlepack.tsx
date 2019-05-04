import { pack, hierarchy, HierarchyCircularNode } from 'd3-hierarchy'
import * as React from 'react'
import Circle from './circle'

export interface ReactD3CirclePackDefaultProps {
  height: number
  width: number
}

export interface ReactD3CirclePackAccessorProps<Datum> {
  keyAccessor: (d: Datum) => string
  valueAccessor: (d: Datum) => number
  children: (d: Datum) => Datum[]
  colorConfigAccessor: (d: Datum) => string
}
export interface ReactD3CirclePackProps<Datum> extends ReactD3CirclePackDefaultProps {
  data: Datum
}
export interface ReactD3CirclePackState<Datum> {
  nodes: HierarchyCircularNode<ICirclePackNode<Datum>>[]
  height: number
  width: number
}

export interface ICirclePackNode<Datum> {
  data?: Datum
  color?: string // accessor
  children?: ICirclePackNode<Datum> // accessor
  key: string // accessor
  value: number // accessor
}

export default class ReactD3CirclePack<Datum> extends React.Component<
  ReactD3CirclePackProps<Datum>,
  ReactD3CirclePackState<Datum>
> {
  static defaultProps: ReactD3CirclePackDefaultProps = {
    height: 1000,
    width: 1000
  }

  constructor(props) {
    super(props)
    this.state = {
      nodes: this.assignInternalProperties(this.props),
      height: this.props.height,
      width: this.props.width
    }
  }

  private assignInternalProperties = ({
    data,
    height,
    width
  }): HierarchyCircularNode<ICirclePackNode<Datum>>[] => {
    // CLONE data
    const internalData = data
    // use accessors to map public api values to internal values for safer manipulation

    // transform
    const hierarchyNodes = hierarchy(data)

    return this.getHierarchyCirclularNodes(internalData)
  }

  private getHierarchyCirclularNodes = (data: ICirclePackNode<Datum>) => {
    const { height, width } = this.state
    const circleNodes = pack<ICirclePackNode<Datum>>()
      .size([width, height])
      .padding(3)(hierarchy(data).sum(d => d.value))

    return circleNodes.descendants()
  }

  private renderCircleNodes = (nodes: HierarchyCircularNode<ICirclePackNode<Datum>>[]) => {
    return nodes.map(node => <Circle node={node} />)
  }

  render() {
    const { nodes } = this.state

    const divStyle = {
      backgroundColor: 'white',
      height: '1000px',
      width: '1000px'
    }
    return (
      <div style={divStyle}>
        <svg height="100%" width="100%">
          {this.renderCircleNodes(nodes)}
        </svg>
        />
      </div>
    )
  }
}
