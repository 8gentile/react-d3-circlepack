import * as React from 'react';
import { HierarchyCircularNode } from 'd3-hierarchy';
export interface CircleProps {
    node: HierarchyCircularNode<{}>;
}
export default class Circle extends React.Component<CircleProps, any> {
    private getFillColor;
    render(): JSX.Element;
}
