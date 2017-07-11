﻿export class ElementBase<T>{
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    elements: ElementBase<any>[];
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        elements?: ElementBase<any>[]
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.elements = options.elements;
    }
}
