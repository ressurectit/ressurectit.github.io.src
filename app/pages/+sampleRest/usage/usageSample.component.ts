import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from "@angular/core";

import {SampleService} from "../../../services/api/sample";

/**
 * REST usage samples component
 */
@Component(
{
    selector: 'usage-sample',
    templateUrl: 'usageSample.component.html',
    providers: [SampleService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsageSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Result from REST call
     */
    public result: any;

    //######################### constructor #########################
    constructor(private _sampleSvc: SampleService,
                private _changeDetector: ChangeDetectorRef)
    {
    }

    //######################### public methods - template bindings #########################

    /**
     * Performs simple GET request
     */
    public async simpleGet()
    {
        this.result = await this._sampleSvc.getData().toPromise();

        this._changeDetector.detectChanges();
        console.log(this.result);
    }
}