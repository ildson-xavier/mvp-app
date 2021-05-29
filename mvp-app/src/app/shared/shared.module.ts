import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule, MatProgressBarModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { DateMaskDirective  } from './directives/date-mask.directive'
import { TimeMaskDirective } from './directives/time-mask.directive'
import { DateMaskCustomDirective } from './directives/date-mask-custom.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DateMaskDirective,
    TimeMaskDirective,
    DateMaskCustomDirective
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,  
    MatListModule,
    RouterModule,
    MatTabsModule,
    MatProgressBarModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DateMaskDirective,
    TimeMaskDirective,
    DateMaskCustomDirective
  ]
})
export class SharedModule { }
