import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {NgSelectEditModule, NgSelectModule} from '@anglr/select';
import {NumberInputModule} from '@anglr/common/forms';
import {DateTimeSelectorModule} from '@anglr/datetime';

/**
 * Common module for enabling forms features
 */
@NgModule(
{
    exports:
    [
        ReactiveFormsModule,
        MatSlideToggleModule,
        NumberInputModule,
        NgSelectModule,
        NgSelectEditModule,
        DateTimeSelectorModule
    ]
})
export class FormsFeatureModule
{
}