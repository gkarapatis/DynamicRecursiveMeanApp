import { ElementBase } from './element-base';
//import {GridOptions} from "ag-grid";

export class GridElement extends ElementBase<string> {
    controlType = 'grid';
    //type: string;
    gridOptions: any;//GridOptions;

    constructor(options: {} = {}) {
        super(options);
        this.gridOptions = options['gridOptions'] || '';
    }
}