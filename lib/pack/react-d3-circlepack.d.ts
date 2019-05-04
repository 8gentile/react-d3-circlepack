import { HierarchyCircularNode } from 'd3-hierarchy';
import * as React from 'react';
export interface ReactD3CirclePackDefaultProps {
    height: string;
    width: string;
}
export interface ICircleNode<Datum> {
    data?: Datum;
    color?: string;
    children?: ICircleNode<Datum>;
    key: string;
    value?: number;
}
export interface ReactD3CirclePackProps<Datum> {
    height: string;
    width: string;
    data: Datum;
}
export interface ReactD3CirclePackState<Datum> {
    nodes: HierarchyCircularNode<{}>[];
}
export default class ReactD3CirclePack<Datum> extends React.Component<ReactD3CirclePackProps<Datum>, ReactD3CirclePackState<Datum>> {
    static defaultProps: ReactD3CirclePackDefaultProps;
    constructor(props: any);
    assignInternalProperties: ({ data, height, width }: {
        data: any;
        height: any;
        width: any;
    }) => HierarchyCircularNode<{}>[];
    renderCircleNodes: (nodes: HierarchyCircularNode<{}>[]) => JSX.Element[];
    render(): JSX.Element;
}
