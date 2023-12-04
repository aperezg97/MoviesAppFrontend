import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TruncateTextPipe} from "src/app/core/pipes/truncate-text.pipe";

@NgModule({
  declarations: [
    TruncateTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TruncateTextPipe
  ]
})
export class PipesModule {
}
