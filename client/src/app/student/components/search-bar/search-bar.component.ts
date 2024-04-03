import { Component } from '@angular/core';
import { PostService } from './post.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  sec: boolean = false;
  constructor(private PostService: PostService, private router: Router) {}
  materials: any = [];
  has: boolean = false;
  sendData(e: any) {
    let query: string = e.target.value;
    let matchspace: any = query.match(/\s*/);
    if (matchspace[0] === query) {
      this.materials = [];
      this.has = false;
      this.sec = false;
      return;
    }
    this.PostService.searchcourses(query.trim()).subscribe(
      (materials) => {
        this.materials = materials;
        this.sec = true;
      },
      (error) => {
        console.error('Error fetching materials:', error);
      }
    );
  }
  renavigate(id: number) {
    this.router.navigate(['/course', id]);
  }
}
