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
var ReactD3CirclePack = /** @class */ (function (_super) {
    __extends(ReactD3CirclePack, _super);
    function ReactD3CirclePack(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            NAME: "" + _this.props.name.split("")
        };
        return _this;
    }
    ReactD3CirclePack.prototype.render = function () {
        return (React.createElement("div", null, "Hello " + this.state.NAME + ", you fabulous hummingbird!"));
    };
    return ReactD3CirclePack;
}(React.Component));
export default ReactD3CirclePack;
//# sourceMappingURL=react-d3-circlepack.js.map