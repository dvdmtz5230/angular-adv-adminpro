import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrunmbsComponent } from './breadcrunmbs/breadcrunmbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
   BreadcrunmbsComponent,
   SidebarComponent,
   HeaderComponent,
  ],
  exports:[
    CommonModule, 
    BreadcrunmbsComponent,
    SidebarComponent,
    HeaderComponent,

  ],
  imports:[
    CommonModule,
  ],
})
export class SharedModule { }
