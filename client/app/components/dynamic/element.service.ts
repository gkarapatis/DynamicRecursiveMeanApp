import { Injectable } from '@angular/core';

import { DropdownElement } from './element-dropdown';
import { ElementBase } from './element-base';
import { TextboxElement } from './element-textbox';
import { GridElement } from './element-grid';
import { LayoutElement } from './element-layout';

@Injectable()
export class ElementService {


    getData() {
        let data = { "firstName": "Giorgos", "fatherName": "Karapatis", "brave": "great", "emailAddress": "gkarapatis@gmail.com", "family": { "fathername": "Petros", "mothername": "Kiriaki" }, "kids": [{ "name": "Petros", "gender": "man" }, { "name": "Zwi", "gender": "woman" }] };
        return data;
    }

    // Todo: get from a remote source of element metadata
    // Todo: make asynchronous
    getElements() {

        let elements: ElementBase<any>[] = [

            new DropdownElement({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),

            new TextboxElement({
                key: 'firstName',
                label: 'First name',                
                required: true,
                order: 1
            }),
            new TextboxElement({
                key: 'fatherName',
                label: 'Father name',
                required: true,
                order: 2
            }),
            new TextboxElement({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 3
            }),

            new LayoutElement({
                key: 'family',
                label: 'Familia',
                required: false,
                elements:
                [
                    new TextboxElement({
                        key: 'fathername',
                        label: 'father name',
                        required: true,
                        order: 1
                    }),
                    new TextboxElement({
                        key: 'mothername',
                        label: 'mother name',
                        order: 2
                    })
                ],
                order: 4
            }),

            new GridElement({
                key: 'kids',
                label: 'Kids',                
                order: 7,
                elements:
                [
                    new TextboxElement({
                        key: 'name',
                        label: 'Name',
                        required: true,
                        order: 1
                    }),
                    new TextboxElement({
                        key: 'gender',
                        label: 'Gender',
                        order: 2
                    })
                ],
                gridOptions: {
                    columnDefs: [
                        new TextboxElement({
                            key: 'name',
                            label: 'Name',
                            required: true,
                            order: 1
                        }),
                        new TextboxElement({
                            key: 'gender',
                            label: 'Gender',
                            order: 2
                        })
                        //{
                        //    headerName: "Name",
                        //    field: "name",
                        //    //cellRendererFramework: RedComponentComponent,
                        //    width: 100
                        //},
                        //{
                        //    headerName: "Gender",
                        //    field: "gender",
                        //    width: 100
                        //},
                    ],
                    rowData :[
                        { name: 'marios', gender: 'man' },
                        { name: 'kiriaki', gender: 'woman' },
                        { name: 'elpida', gender: 'woman' }
                    ]
                }
            })


        ];

        return elements.sort((a, b) => a.order - b.order);
    }

    getint() { return 1; }

}
