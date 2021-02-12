import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   DemoRoutingModule,
  ],
  declarations: [DemoComponent]
})
export class DemoModule {}
