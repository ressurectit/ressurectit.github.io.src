import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {Grid} from '@anglr/grid';
import {showMetadataSelector} from '@anglr/grid/extensions';

/**
 * Component used for displaying column selection
 */
@Component(
{
    selector: 'btn-column-selection',
    templateUrl: 'vyberStlpcovBtn.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VyberStlpcovBtnComponent
{
    //######################### public properties - inputs #########################

    /**
     * Grid component for which is column selection displayed
     */
    @Input()
    public grid: Grid;

    //######################### public methods - template bindings #########################

    /**
     * Shows metadata selection for grid
     */
    public showSelection()
    {
        if(this.grid)
        {
            this.grid.execute(showMetadataSelector());
        }
    }
}