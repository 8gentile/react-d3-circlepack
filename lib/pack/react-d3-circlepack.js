var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { pack, hierarchy } from 'd3-hierarchy';
import * as React from 'react';
import Circle from './circle';
var ReactD3CirclePack = /** @class */ (function (_super) {
    __extends(ReactD3CirclePack, _super);
    function ReactD3CirclePack(props) {
        var _this = _super.call(this, props) || this;
        _this.assignInternalProperties = function (_a) {
            var data = _a.data, height = _a.height, width = _a.width;
            // use accessors to map public api values to internal values for safe manipulation
            var hierarchyNodes = hierarchy(data);
            var circleNodes = pack()
                .size([parseInt(width), parseInt(height)])
                .padding(3)(hierarchy(data)
                .sum(function (d) { return d.value; }));
            return circleNodes.descendants();
        };
        _this.renderCircleNodes = function (nodes) {
            return nodes.map(function (node) { return React.createElement(Circle, { node: node }); });
        };
        _this.state = {
            nodes: _this.assignInternalProperties(_this.props),
        };
        return _this;
    }
    ReactD3CirclePack.prototype.render = function () {
        var nodes = this.state.nodes;
        var divStyle = {
            backgroundColor: 'white',
            height: '1000px',
            width: '1000px'
        };
        debugger;
        return (React.createElement("div", { style: divStyle },
            React.createElement("svg", { height: "100%", width: "100%" }, this.renderCircleNodes(nodes)),
            "/>"));
    };
    ReactD3CirclePack.defaultProps = {
        height: '1000px',
        width: '1000px'
    };
    return ReactD3CirclePack;
}(React.Component));
export default ReactD3CirclePack;
//# sourceMappingURL=react-d3-circlepack.js.map