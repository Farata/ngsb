var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgModule, Input } from '@angular/core';
export var Placeholder = (function () {
    function Placeholder() {
    }
    Placeholder = __decorate([
        Component({selector: 'ngsb-placeholder',
            styles: [""],
            template: ""
        }), 
        __metadata('design:paramtypes', [])
    ], Placeholder);
    return Placeholder;
}());
export var PlaceholderModule = (function () {
    function PlaceholderModule() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], PlaceholderModule.prototype, "title", void 0);
    PlaceholderModule = __decorate([
        NgModule({
            declarations: [Placeholder],
            exports: [Placeholder]
        }), 
        __metadata('design:paramtypes', [])
    ], PlaceholderModule);
    return PlaceholderModule;
}());

//# sourceMappingURL=placeholder.js.map
