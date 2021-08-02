import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VyberStlpcovBtnComponent} from '../components';

/**
 * Module that contains button that allows opening selection of columns for grid
 */
@NgModule(
{
    imports:
    [
        CommonModule
    ],
    declarations:
    [
        VyberStlpcovBtnComponent
    ],
    exports:
    [
        VyberStlpcovBtnComponent        
    ]
})
export class VyberStlpcovBtnModule
{
}