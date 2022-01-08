import {

  NgModule

} from '@angular/core';



import {

  CommonModule

} from '@angular/common';



import {

  AppSkyModule

} from './app-sky.module';



import {

  SkyToolbarModule

} from '@skyux/layout';



import {

  FormsModule

} from '@angular/forms';



import {

  SkyModalModule

} from '@skyux/modals';



import {

  SkyInputBoxModule

} from '@skyux/forms';



import {

  AgGridModule

} from 'ag-grid-angular';



@NgModule({

  imports:[

    AgGridModule.withComponents([])

  ],

  exports: [

    CommonModule,

    AppSkyModule,

    SkyToolbarModule,

    FormsModule,

    SkyModalModule,

    SkyInputBoxModule,

    AgGridModule

  ]

})

export class AppExtrasModule { }