import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTabsModule} from '@angular/material/tabs';
import {ProgressIndicatorModule} from '@anglr/common';
import {BootstrapCoreModule} from '@anglr/bootstrap/core';
import {DatetimepickerModule} from '@anglr/bootstrap/datetimepicker';
import {TypeaheadModule, TypeaheadTagsModule} from '@anglr/bootstrap/typeahead';
import {GridModule} from '@anglr/grid';
import {VirtualScrollTableContentRendererModule} from '@anglr/grid/material';
import {NgSelectModule, NgSelectDynamicModule, NgSelectEditModule} from '@anglr/select';
import {CommonModule as NgCommonModule} from '@anglr/common';
import {NumeralModule} from '@anglr/common/numeral';
import {NumberInputModule} from '@anglr/common/forms';
import {MomentModule} from '@anglr/common/moment';
import {NotificationsModule} from '@anglr/notifications';
import {InternalServerErrorModule} from '@anglr/error-handling';
import {AuthorizationModule} from '@anglr/authentication';
import {MarkdownModule} from '@anglr/md-help/web';
import {TranslateModule} from '@ngx-translate/core';

import {AsSourceModule} from '../modules/asSource';
import {SourceCodeModule} from '../modules/sourceCode';
import {GoBackModule} from '../modules/goBack';

/**
 * Common module for all other modules
 */
@NgModule(
{
    exports:
    [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        ScrollingModule,
        NgCommonModule,
        ProgressIndicatorModule,
        NumeralModule,
        NumberInputModule,
        MomentModule,
        TranslateModule,
        BootstrapCoreModule,
        DatetimepickerModule,
        TypeaheadModule,
        TypeaheadTagsModule,
        NotificationsModule,
        GridModule,
        VirtualScrollTableContentRendererModule,
        AuthorizationModule,
        NgSelectModule,
        NgSelectDynamicModule,
        NgSelectEditModule,
        InternalServerErrorModule,
        MatTabsModule,
        MarkdownModule,
        AsSourceModule,
        SourceCodeModule,
        GoBackModule
    ]
})
export class CommonSharedModule
{
}