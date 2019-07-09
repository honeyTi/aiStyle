import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCardComponent } from './button-card.component';

@NgModule({
  declarations: [ButtonCardComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonCardComponent]
})
export class ButtonCardModule { }
