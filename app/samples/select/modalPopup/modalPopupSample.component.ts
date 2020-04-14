import {Component, ChangeDetectionStrategy} from "@angular/core";
import {FormControl} from "@angular/forms";

/**
 * Modal Popup sample for select component
 */
@Component(
{
    selector: 'modal-popup-sample',
    templateUrl: 'modalPopupSample.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalPopupSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to select
     */
    public selectControl: FormControl = new FormControl(null);
}