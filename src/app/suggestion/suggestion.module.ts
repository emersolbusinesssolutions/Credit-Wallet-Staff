import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionRoutingModule } from './suggestion-routing.module';
import { SuggestionComponent } from './suggestion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SuggestionRoutingModule
  ],
  declarations: [SuggestionComponent]
})
export class SuggestionModule { }
