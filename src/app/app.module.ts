import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitUserSearchComponent } from './myComponent/git-user-search/git-user-search.component';
import { GitUserDataComponent } from './myComponent/git-user-data/git-user-data.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { GitUserRepoDataComponent } from './myComponent/git-user-repo-data/git-user-repo-data.component';

@NgModule({
  declarations: [
    AppComponent,
    GitUserSearchComponent,
    GitUserDataComponent,
    GitUserRepoDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
