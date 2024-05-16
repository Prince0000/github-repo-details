import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-git-user-repo-data',
  templateUrl: './git-user-repo-data.component.html',
  styleUrls: ['./git-user-repo-data.component.css']
})
export class GitUserRepoDataComponent implements OnInit {
  @Input() user: string | undefined;
  repos: any[] = [];
  pagedRepos: any[] = []; 
  currentPage = 1;
  itemsPerPage = 4; 
  totalPages = 0; 
  isLoading: boolean = true; 
  error: string | undefined;
  pageNumbers: number[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (this.user) {
      this.getRepositories(this.user.trim(), this.currentPage);
    } else {
      console.error('No username provided.');
      this.router.navigate(['/']);
    }
  }

  getRepositories(username: string, page: number): void {
    this.isLoading = true;
    this.error = undefined;

    const url = `https://api.github.com/users/${username}/repos`;
    // const params = { page: page.toString(), per_page: this.itemsPerPage.toString() };

    this.http.get<any[]>(url)
      .pipe(
        catchError((error) => {
          console.error('Error fetching repositories:', error);
          this.error = 'Failed to fetch repositories.';
          return throwError(error);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data: any[]) => {
        this.repos = data;
        console.log(this.repos);
        this.totalPages = Math.ceil(this.repos.length / this.itemsPerPage);
        this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
        this.setPage(this.currentPage);
      });
  }

  setPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.pagedRepos = this.repos.slice(startIndex, startIndex + this.itemsPerPage);
  }

  previousPage(): void {
    this.setPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.setPage(this.currentPage + 1);
  }
}
