import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DashboardDetailComponent } from 'src/app/modules/dashboard-detail/dashboard-detail.component';
import { JobDialogComponent} from 'src/app/modules/dashboard-detail/job-dialog/job-dialog.component'
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { DetailComponent } from 'src/app/modules/posts/detail/detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatSortModule, MatPaginatorModule, MatTableModule, MatIconModule, 
  MatToolbarModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatDialogModule, 
  MatExpansionModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule, MatTabsModule,
  MatProgressBarModule } from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductListComponent } from 'src/app/modules/product/product-list/product-list.component';
import { ProductDetailComponent } from 'src/app/modules/product/product-detail/product-detail.component';
import { ProductUpdateComponent } from 'src/app/modules/product/product-update/product-update.component';
import { ProductCreateComponent } from 'src/app/modules/product/product-create/product-create.component';
import { ConfirmationDialogComponent } from 'src/app/modules/confirmation-dialog/confirmation-dialog.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { ErrorComponent } from 'src/app/modules/error/error.component';

import { ParameterComponent } from 'src/app/modules/parameters/parameter.component';
import { ConfigDataprevComponent } from 'src/app/modules/parameters/config-dataprev/config-dataprev.component';
import { ConfigDiretoryComponent } from '../../modules/parameters/config-diretory/config-diretory.component'
import { DataComplementComponent } from '../../modules/parameters/data-complement/data-complement.component'
import { ConfigGridDialogComponent } from '../../modules/parameters/config-dataprev/config-grid-dialog/config-grid-dialog.component'
import { EditServiceDialogComponent } from '../../modules/parameters/config-dataprev/edit-service-dialog/edit-service-dialog.component'
import { ConfirmDeleteDialogComponent } from 'src/app/modules/parameters/config-dataprev/config-grid-dialog/confirm-delete-dialog/confirm-delete-dialog.component';

import { MonitoringPanelComponent } from 'src/app/modules/monitoring-panel/monitoring-panel.component';
import { MonitoringFormComponent } from 'src/app/modules/monitoring-panel/monitoring-form/monitoring-form.component';
import { MonitoringTableComponent } from 'src/app/modules/monitoring-panel/monitoring-table/monitoring-table.component';
import { MonitoringDetailComponent } from 'src/app/modules/monitoring-panel/monitoring-detail/monitoring-detail.component';
import { SuccessDetailComponent } from 'src/app/modules/monitoring-panel/monitoring-detail/success-detail/success-detail.component';
import { FailureDetailComponent } from 'src/app/modules/monitoring-panel/monitoring-detail/failure-detail/failure-detail.component';

import { MonitoringRmcPanelComponent } from 'src/app/modules/monitoring-rmc-panel/monitoring-rmc-panel.component';
import { MonitoringRmcFormComponent } from 'src/app/modules/monitoring-rmc-panel/monitoring-rmc-form/monitoring-rmc-form.component';
import { MonitoringRmcTableComponent } from 'src/app/modules/monitoring-rmc-panel/monitoring-rmc-table/monitoring-rmc-table.component';
import { MonitoringRmcDetailComponent } from 'src/app/modules/monitoring-rmc-panel/monitoring-rmc-detail/monitoring-rmc-detail.component';
import { SuccessRmcDetailComponent } from 'src/app/modules/monitoring-rmc-panel/monitoring-rmc-detail/success-rmc-detail/success-rmc-detail.component';
import { FailureRmcDetailComponent } from 'src/app/modules/monitoring-rmc-panel/monitoring-rmc-detail/failure-rmc-detail/failure-rmc-detail.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    LoginComponent,
    ErrorComponent,
    DetailComponent,
    
    ParameterComponent,
    ConfigDataprevComponent,
    ConfigDiretoryComponent,
    DataComplementComponent,
    ConfigGridDialogComponent,
    EditServiceDialogComponent,

    MonitoringPanelComponent,
    MonitoringFormComponent,
    MonitoringTableComponent,
    MonitoringDetailComponent,
    SuccessDetailComponent,
    FailureDetailComponent,

    MonitoringRmcPanelComponent,
    MonitoringRmcFormComponent,
    MonitoringRmcTableComponent,
    MonitoringRmcDetailComponent,
    SuccessRmcDetailComponent,
    FailureRmcDetailComponent,
    
    ProductListComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    ProductCreateComponent,
    ConfirmationDialogComponent,
    ConfirmDeleteDialogComponent,

    DashboardDetailComponent,
    JobDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,

    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,

    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,

    NgxSpinnerModule,

    MatExpansionModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,

    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatProgressBarModule
  ],
  entryComponents: [ConfirmationDialogComponent]
})
export class DefaultModule { }
