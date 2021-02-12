import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   NewsRoutingModule
  ],
  declarations: [NewsComponent]
})
export class NewsModule {}
