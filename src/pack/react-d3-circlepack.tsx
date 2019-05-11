import { pack, hierarchy, HierarchyCircularNode } from 'd3-hierarchy'
import * as React from 'react'
import { cloneDeep } from 'lodash'
import Circle from './circle'

export interface ReactD3CirclePackAccessorProps<Datum> {
  keyAccessor?: (d: Datum) => string
  valueAccessor?: (d: Datum) => number
  childAccessor?: (d: Datum) => Datum[]
  colorConfigAccessor?: (d: Datum) => string
}
export interface ReactD3CirclePackProps<Datum> extends ReactD3CirclePackAccessorProps<Datum> {
  data: Datum
  height?: number
  width?: number
}
export interface ReactD3CirclePackState<Datum> {
  data: ICirclePackNode<Datum>
  height: number
  nodes: HierarchyCircularNode<ICirclePackNode<Datum>>[]
  width: number
}

export interface ICirclePackNode<Datum> {
  data?: Datum
  color?: string
  _children?: ICirclePackNode<Datum>
  _key: string
  _value: number
}

export default class ReactD3CirclePack<Datum> extends React.Component<
  ReactD3CirclePackProps<Datum>,
  ReactD3CirclePackState<Datum>
> {
  static defaultProps = {
    height: 500,
    width: 500,
    keyAccessor: d => d.key,
    valueAccessor: d => d.value,
    childAccessor: d => d.children || []
  }

  // used for assigning internal properties
  static value = Symbol('value')
  static children = Symbol('children')
  static key = Symbol('key')

  constructor(props, defaultProps) {
    super(props, defaultProps)

    const madProps = {
      ...defaultProps,
      ...props,
      data: this.assignInternalProperties(cloneDeep(props.data))
    }
    this.state = {
      height: madProps.height,
      width: madProps.width,
      data: madProps.data,
      nodes: this.getHierarchyCirclularNodes(madProps)
    }
  }

  private assignInternalProperties = (data): ICirclePackNode<Datum> => {
    ;[data].forEach(node => {
      node[ReactD3CirclePack.value] = this.props.valueAccessor!(node)
      node[ReactD3CirclePack.key] = this.props.keyAccessor!(node)
      node[ReactD3CirclePack.children] = this.props.childAccessor!(node)

      node[ReactD3CirclePack.children].length &&
        node[ReactD3CirclePack.children].forEach(this.assignInternalProperties)
    })
    return data
  }

  private getHierarchyCirclularNodes = ({
    data,
    height,
    width
  }): HierarchyCircularNode<ICirclePackNode<Datum>>[] => {
    const circleNodes = pack<ICirclePackNode<Datum>>()
      .size([width, height])
      .padding(3)(hierarchy(data).sum(d => d[ReactD3CirclePack.value]))
    return circleNodes.descendants()
  }

  private renderCircleNodes = (nodes: HierarchyCircularNode<ICirclePackNode<Datum>>[]) => {
    return nodes.map(node => <Circle node={node} />)
  }

  render() {
    const { nodes, height, width } = this.state
    const divStyle = {
      backgroundColor: 'white',
      height: `${height}px`,
      width: `${width}px`
    }
    return (
      <div style={divStyle}>
        <svg height="100%" width="100%">
          {this.renderCircleNodes(nodes)}
        </svg>
      </div>
    )
  }
}
