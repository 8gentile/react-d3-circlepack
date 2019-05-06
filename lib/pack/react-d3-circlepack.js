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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { pack, hierarchy } from 'd3-hierarchy';
import * as React from 'react';
import { cloneDeep } from 'lodash';
import Circle from './circle';
var ReactD3CirclePack = /** @class */ (function (_super) {
    __extends(ReactD3CirclePack, _super);
    function ReactD3CirclePack(props, defaultProps) {
        var _this = _super.call(this, props, defaultProps) || this;
        _this.assignInternalProperties = function (_a) {
            var data = _a.data, height = _a.height, width = _a.width;
            // GENERIXXX
            // CLONE data
            var internalData = cloneDeep(data);
            // use accessors to map public api values to internal values for safer manipulation
            // return internalData;
            // transform
            // const hierarchyNodes = hierarchy(data)
            return internalData;
        };
        _this.getHierarchyCirclularNodes = function (_a) {
            var data = _a.data, height = _a.height, width = _a.width;
            var circleNodes = pack()
                .size([width, height])
                .padding(3)(hierarchy(data).sum(function (d) { return d.value; }));
            return circleNodes.descendants();
        };
        _this.renderCircleNodes = function (nodes) {
            return nodes.map(function (node) { return React.createElement(Circle, { node: node }); });
        };
        var madProps = __assign({}, defaultProps, props);
        var data = _this.assignInternalProperties(madProps);
        _this.state = {
            height: madProps.height,
            width: madProps.width,
            data: data,
            nodes: _this.getHierarchyCirclularNodes(__assign({}, madProps, { data: data }))
        };
        return _this;
    }
    ReactD3CirclePack.prototype.render = function () {
        var _a = this.state, nodes = _a.nodes, height = _a.height, width = _a.width;
        var divStyle = {
            backgroundColor: 'white',
            height: height + "px",
            width: width + "px"
        };
        return (React.createElement("div", { style: divStyle },
            React.createElement("svg", { height: "100%", width: "100%" }, this.renderCircleNodes(nodes)),
            "/>"));
    };
    ReactD3CirclePack.defaultProps = {
        height: 1000,
        width: 1000
    };
    return ReactD3CirclePack;
}(React.Component));
export default ReactD3CirclePack;
//# sourceMappingURL=react-d3-circlepack.js.map