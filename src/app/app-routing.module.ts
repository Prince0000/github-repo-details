import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitUserDataComponent } from './myComponent/git-user-data/git-user-data.component';
import { GitUserSearchComponent } from './myComponent/git-user-search/git-user-search.component';

const routes: Routes = [{ path: '', component: GitUserSearchComponent },
{ path: 'gitUser', component: GitUserDataComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
