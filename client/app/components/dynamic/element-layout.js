"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var element_base_1 = require('./element-base');
var LayoutElement = (function (_super) {
    __extends(LayoutElement, _super);
    function LayoutElement() {
        _super.apply(this, arguments);
        this.controlType = 'layout';
    }
    return LayoutElement;
}(element_base_1.ElementBase));
exports.LayoutElement = LayoutElement;
//# sourceMappingURL=element-layout.js.map