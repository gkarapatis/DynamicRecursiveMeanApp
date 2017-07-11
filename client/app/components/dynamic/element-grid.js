"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var element_base_1 = require('./element-base');
//import {GridOptions} from "ag-grid";
var GridElement = (function (_super) {
    __extends(GridElement, _super);
    function GridElement(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.controlType = 'grid';
        this.gridOptions = options['gridOptions'] || '';
    }
    return GridElement;
}(element_base_1.ElementBase));
exports.GridElement = GridElement;
//# sourceMappingURL=element-grid.js.map