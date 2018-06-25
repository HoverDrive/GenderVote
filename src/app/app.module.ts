import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VoteStorageService } from './services/vote-storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [VoteStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
