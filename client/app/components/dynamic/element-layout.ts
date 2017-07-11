import { ElementBase } from './element-base';

export class LayoutElement extends ElementBase<string> {
    controlType = 'layout';
    elements: ElementBase<any>[];

    //constructor(options: {} = {}) {
    //    super(options);
    //    this.type = options['type'] || '';
    //}
}
