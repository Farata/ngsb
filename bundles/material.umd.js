(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.material = global.ng.material || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Placeholder = (function () {
    function Placeholder() {
    }
    Placeholder = __decorate$1([
        _angular_core.Component({selector: 'ngsb-placeholder',
            styles: [""],
            template: ""
        }), 
        __metadata$1('design:paramtypes', [])
    ], Placeholder);
    return Placeholder;
}());
var PlaceholderModule = (function () {
    function PlaceholderModule() {
    }
    __decorate$1([
        _angular_core.Input(), 
        __metadata$1('design:type', String)
    ], PlaceholderModule.prototype, "title", void 0);
    PlaceholderModule = __decorate$1([
        _angular_core.NgModule({
            declarations: [Placeholder],
            exports: [Placeholder]
        }), 
        __metadata$1('design:paramtypes', [])
    ], PlaceholderModule);
    return PlaceholderModule;
}());

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SURANCEBAY_MODULES = [
    PlaceholderModule
];
var SuranceBayModule = (function () {
    function SuranceBayModule() {
    }
    SuranceBayModule = __decorate([
        _angular_core.NgModule({
            imports: [PlaceholderModule],
            exports: SURANCEBAY_MODULES,
        }), 
        __metadata('design:paramtypes', [])
    ], SuranceBayModule);
    return SuranceBayModule;
}());

exports.SuranceBayModule = SuranceBayModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
