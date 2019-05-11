import { HierarchyCircularNode } from 'd3-hierarchy';
import * as React from 'react';
export interface ReactD3CirclePackAccessorProps<Datum> {
    keyAccessor?: (d: Datum) => string;
    valueAccessor?: (d: Datum) => number;
    childAccessor?: (d: Datum) => Datum[];
    colorConfigAccessor?: (d: Datum) => string;
}
export interface ReactD3CirclePackProps<Datum> extends ReactD3CirclePackAccessorProps<Datum> {
    data: Datum;
    height?: number;
    width?: number;
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
    _children?: ICirclePackNode<Datum>;
    _key: string;
    _value: number;
}
export default class ReactD3CirclePack<Datum> extends React.Component<ReactD3CirclePackProps<Datum>, ReactD3CirclePackState<Datum>> {
    static defaultProps: {
        height: number;
        width: number;
        keyAccessor: (d: any) => any;
        valueAccessor: (d: any) => any;
        childAccessor: (d: any) => any;
    };
    static value: symbol;
    static children: symbol;
    static key: symbol;
    constructor(props: any, defaultProps: any);
    private assignInternalProperties;
    private getHierarchyCirclularNodes;
    private renderCircleNodes;
    render(): JSX.Element;
}
