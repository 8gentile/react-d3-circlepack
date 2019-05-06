import { HierarchyCircularNode } from 'd3-hierarchy';
import * as React from 'react';
export interface ReactD3CirclePackDefaultProps {
    height?: number;
    width?: number;
}
export interface ReactD3CirclePackAccessorProps<Datum> {
    keyAccessor: (d: Datum) => string;
    valueAccessor: (d: Datum) => number;
    children: (d: Datum) => Datum[];
    colorConfigAccessor: (d: Datum) => string;
}
export interface ReactD3CirclePackProps<Datum> extends ReactD3CirclePackDefaultProps {
    data: Datum;
}
export interface ReactD3CirclePackState<Datum> {
    data: ICirclePackNode<Datum>;
    height: number;
    nodes: HierarchyCircularNode<ICirclePackNode<Datum>>[];
    width: number;
}
export interface ICirclePackNode<Datum> {
    data?: Datum;
    color?: string;
    children?: ICirclePackNode<Datum>;
    key: string;
    value: number;
}
export default class ReactD3CirclePack<Datum> extends React.Component<ReactD3CirclePackProps<Datum>, ReactD3CirclePackState<Datum>> {
    static defaultProps: ReactD3CirclePackDefaultProps;
    constructor(props: any, defaultProps: any);
    private assignInternalProperties;
    private getHierarchyCirclularNodes;
    private renderCircleNodes;
    render(): JSX.Element;
}
