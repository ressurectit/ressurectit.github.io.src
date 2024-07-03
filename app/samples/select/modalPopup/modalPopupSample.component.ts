// import {Component, ChangeDetectionStrategy} from '@angular/core';
// import {JsonPipe} from '@angular/common';
// import {FormControl, ReactiveFormsModule} from '@angular/forms';
// import {NgSelectModule} from '@anglr/select';
// import {NgSelectDialogPopupModule} from '@anglr/select/material';

// /**
//  * Modal Popup sample for select component
//  */
// @Component(
// {
//     selector: 'modal-popup-sample',
//     templateUrl: 'modalPopupSample.component.html',
//     standalone: true,
//     imports:
//     [
//         NgSelectDialogPopupModule,
//         ReactiveFormsModule,
//         NgSelectModule,
//         JsonPipe,
//     ],
//     changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class ModalPopupSampleComponent
// {
//     //######################### protected properties - template bindings #########################

//     /**
//      * Control bound to select
//      */
//     protected selectControl: FormControl<string|null> = new FormControl(null);
// }