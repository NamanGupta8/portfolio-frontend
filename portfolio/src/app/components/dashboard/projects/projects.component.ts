import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  count: number = 1;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  scrollTo(type: string): void {
    const fragment = this.getItem(type);
    this.router.navigate([], { fragment: fragment }).then((res) => {
      const element = document.getElementById(fragment);
      if (element != undefined) element.scrollIntoView();
    });
  }
  getItem(type: string) {
    switch (type) {
      case 'prev':
        if (this.count == 1) this.count = 4;
        else this.count -= 1;
        break;
      case 'next':
        if (this.count == 4) this.count = 1;
        else this.count += 1;
        break;
      default:
        break;
    }
    console.log(this.count);
    return `item${this.count}`;
  }
}
