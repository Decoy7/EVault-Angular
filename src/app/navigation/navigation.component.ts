import { Component, ViewChild, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {ToastrService} from "ngx-toastr";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  @ViewChild('drawer') drawer: MatSidenav | undefined;
  isLightMode = false;

  constructor(private toast:ToastrService) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  changeTheme() {
    if(this.isLightMode){
      this.toast.success('🔆 Changed to light mode! 🔆','',{
        timeOut: 3000,
        positionClass: 'toast-top-center',
      });
    }else{
      this.toast.success('🌑 Changed to dark mode! 🌑', '', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      });
    }
    this.isLightMode = !this.isLightMode;
  }

  handleSideNav() {
    this.drawer?.toggle();
  }
}
