import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  NavigationStart,
  Router,
  Event as NavigationEvent,
} from '@angular/router';
import { filter, finalize } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  opened: boolean = false;
  background: string = '!bg-second-image';

  constructor(
    private _router: Router,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this._router.events
      .pipe(finalize(() => this._changeDetectorRef.markForCheck()))
      .subscribe((event: NavigationEvent) => {
        if (event instanceof NavigationStart) {
          switch (event.url) {
            case '/dashboard/home':
              this.background = '!bg-second-image';
              break;
            case '/dashboard/about':
              this.background = '!bg-third-image';
              break;
            case '/dashboard/skills':
              this.background = '!bg-second-image';
              break;
            case '/dashboard/projects':
              this.background = '!bg-third-image';
              break;
            case '/dashboard/contact':
              this.background = '!bg-second-image';

              break;
            default:
              this.background = '!bg-second-image';
              break;
          }
        }
      });
  }

  ngOnInit(): void {}
}
