import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-git-user-search',
  templateUrl: './git-user-search.component.html',
  styleUrls: ['./git-user-search.component.css']
})
export class GitUserSearchComponent {
  username: string = ''; // Property to bind to the input field

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.username.trim() !== '') {
      // Navigate to '/gitUser' route with username as a query parameter
      this.router.navigate(['/gitUser'], { queryParams: { username: this.username } });
    } else {
      // Handle empty username (optional)
      alert('Please enter a GitHub username.');
    }
  }
}
