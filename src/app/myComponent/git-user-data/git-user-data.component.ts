import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-git-user-data',
  templateUrl: './git-user-data.component.html',
  styleUrls: ['./git-user-data.component.css']
})
export class GitUserDataComponent implements OnInit {
  username = '';
  userData: any;
  isLoading = true;
  isLoaded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['username'] && params['username'].trim() !== '') {
        this.username = params['username'];
        this.getUserData(this.username.trim());
      } else {
        this.router.navigate(['/']); // Redirect to home if no username parameter
      }
    });
  }

  getUserData(username: string): void {
    this.isLoading = true;
    this.isLoaded = false;
    this.http.get(`https://api.github.com/users/${username}`)
      .subscribe(
        (data: any) => {
          this.userData = data;
          this.isLoading = false;
          this.isLoaded = true;
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching user data:', error);
          this.isLoading = false;
          this.isLoaded = false;

          let errorMessage = 'An unexpected error occurred. Please try again later.';

          if (error.status === 404) {
            errorMessage = 'User not found. Please check the username and try again.';
          } else if (error.status === 403) {
            errorMessage = 'Rate limit exceeded or something went wrong. Please try again.';
          }

          // alert(errorMessage);

          Swal.fire({
            title: 'Error !',
            html: '<small>'+errorMessage+'</small>',
            icon: 'error'
          });
          
          
          // Display error message or navigate with error details
          this.router.navigate(['/']);
        }
      );
  }
}
