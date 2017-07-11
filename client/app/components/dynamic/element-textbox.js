"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var element_base_1 = require('./element-base');
var TextboxElement = (function (_super) {
    __extends(TextboxElement, _super);
    function TextboxElement(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.controlType = 'textbox';
        this.type = options['type'] || '';
    }
    return TextboxElement;
}(element_base_1.ElementBase));
exports.TextboxElement = TextboxElement;
//# sourceMappingURL=element-textbox.js.map