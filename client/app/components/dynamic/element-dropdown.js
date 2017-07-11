"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var element_base_1 = require('./element-base');
var DropdownElement = (function (_super) {
    __extends(DropdownElement, _super);
    function DropdownElement(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.controlType = 'dropdown';
        this.options = [];
        this.options = options['options'] || [];
    }
    return DropdownElement;
}(element_base_1.ElementBase));
exports.DropdownElement = DropdownElement;
//# sourceMappingURL=element-dropdown.js.map