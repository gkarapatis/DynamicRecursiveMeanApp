"use strict";
var ElementBase = (function () {
    function ElementBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.elements = options.elements;
    }
    return ElementBase;
}());
exports.ElementBase = ElementBase;
//# sourceMappingURL=element-base.js.map