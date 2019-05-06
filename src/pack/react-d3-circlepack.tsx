import { pack, hierarchy, HierarchyCircularNode } from 'd3-hierarchy'
import * as React from 'react'
import { cloneDeep } from 'lodash'
import Circle from './circle'

export interface ReactD3CirclePackDefaultProps {
  height?: number
  width?: number
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
  data: ICirclePackNode<Datum>
  height: number
  nodes: HierarchyCircularNode<ICirclePackNode<Datum>>[]
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

  constructor(props, defaultProps) {
    super(props, defaultProps)

    const madProps = {
      ...defaultProps,
      ...props
    }
    this.state = {
      height: madProps.height,
      width: madProps.width,
      data: this.assignInternalProperties(madProps),
      nodes: this.getHierarchyCirclularNodes(madProps)
    }
  }

  private assignInternalProperties = ({ data, height, width }): ICirclePackNode<Datum> => {
    // GENERIXXX
    // CLONE data
    const internalData = cloneDeep(data)
    // use accessors to map public api values to internal values for safer manipulation

    // return internalData;
    // transform
    // const hierarchyNodes = hierarchy(data)
    return internalData
  }

  private getHierarchyCirclularNodes = ({
    data,
    height,
    width
  }): HierarchyCircularNode<ICirclePackNode<Datum>>[] => {
    const circleNodes = pack<ICirclePackNode<Datum>>()
      .size([width, height])
      .padding(3)(hierarchy(data).sum(d => d.value))

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
        />
      </div>
    )
  }
}
