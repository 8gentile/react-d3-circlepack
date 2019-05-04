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
import * as React from 'react';
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getFillColor = function (depth) {
            switch (depth) {
                case 0:
                    return 'blue';
                case 1:
                    return 'green';
                default:
                    return 'wheat';
            }
        };
        return _this;
    }
    Circle.prototype.render = function () {
        var node = this.props.node;
        return (React.createElement("circle", { cx: node.x, cy: node.y, r: node.r, fill: this.getFillColor(node.depth) }));
    };
    return Circle;
}(React.Component));
export default Circle;
//# sourceMappingURL=circle.js.map