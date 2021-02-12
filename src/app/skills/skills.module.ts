import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillsRoutingModule
  ],
  declarations: [SkillsComponent]
})
export class SkillsModule {}
