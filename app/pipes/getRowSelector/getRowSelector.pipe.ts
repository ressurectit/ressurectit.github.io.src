import {Pipe, PipeTransform} from '@angular/core';
import {Grid, GridPluginType, RowSelector} from '@anglr/grid';

/**
 * Gets row selector for grid
 */
@Pipe({name: 'getRowSelector'})
export class GetRowSelector implements PipeTransform
{
    /**
     * Gets row selector for grid
     * @param value - Grid instance
     */
    public transform(value: Grid): RowSelector
    {
        return value.getPlugin<RowSelector>(GridPluginType.RowSelector);
    }
}
