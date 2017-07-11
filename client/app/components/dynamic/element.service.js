"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var element_dropdown_1 = require('./element-dropdown');
var element_textbox_1 = require('./element-textbox');
var element_grid_1 = require('./element-grid');
var element_layout_1 = require('./element-layout');
var ElementService = (function () {
    function ElementService() {
    }
    ElementService.prototype.getData = function () {
        var data = { "firstName": "Giorgos", "fatherName": "Karapatis", "brave": "great", "emailAddress": "gkarapatis@gmail.com", "family": { "fathername": "Petros", "mothername": "Kiriaki" }, "kids": [{ "name": "Petros", "gender": "man" }, { "name": "Zwi", "gender": "woman" }] };
        return data;
    };
    // Todo: get from a remote source of element metadata
    // Todo: make asynchronous
    ElementService.prototype.getElements = function () {
        var elements = [
            new element_dropdown_1.DropdownElement({
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
            new element_textbox_1.TextboxElement({
                key: 'firstName',
                label: 'First name',
                required: true,
                order: 1
            }),
            new element_textbox_1.TextboxElement({
                key: 'fatherName',
                label: 'Father name',
                required: true,
                order: 2
            }),
            new element_textbox_1.TextboxElement({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 3
            }),
            new element_layout_1.LayoutElement({
                key: 'family',
                label: 'Familia',
                required: false,
                elements: [
                    new element_textbox_1.TextboxElement({
                        key: 'fathername',
                        label: 'father name',
                        required: true,
                        order: 1
                    }),
                    new element_textbox_1.TextboxElement({
                        key: 'mothername',
                        label: 'mother name',
                        order: 2
                    })
                ],
                order: 4
            }),
            new element_grid_1.GridElement({
                key: 'kids',
                label: 'Kids',
                order: 7,
                elements: [
                    new element_textbox_1.TextboxElement({
                        key: 'name',
                        label: 'Name',
                        required: true,
                        order: 1
                    }),
                    new element_textbox_1.TextboxElement({
                        key: 'gender',
                        label: 'Gender',
                        order: 2
                    })
                ],
                gridOptions: {
                    columnDefs: [
                        new element_textbox_1.TextboxElement({
                            key: 'name',
                            label: 'Name',
                            required: true,
                            order: 1
                        }),
                        new element_textbox_1.TextboxElement({
                            key: 'gender',
                            label: 'Gender',
                            order: 2
                        })
                    ],
                    rowData: [
                        { name: 'marios', gender: 'man' },
                        { name: 'kiriaki', gender: 'woman' },
                        { name: 'elpida', gender: 'woman' }
                    ]
                }
            })
        ];
        return elements.sort(function (a, b) { return a.order - b.order; });
    };
    ElementService.prototype.getint = function () { return 1; };
    ElementService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ElementService);
    return ElementService;
}());
exports.ElementService = ElementService;
//# sourceMappingURL=element.service.js.map