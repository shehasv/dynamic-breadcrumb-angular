import { Component, OnInit } from "@angular/core";
import {
  Router,
  Event,
  ActivationEnd,
  NavigationEnd,
} from "@angular/router";
import { filter, map, buffer, pluck } from "rxjs/operators";

const isNavigationEnd = (ev: Event) => ev instanceof NavigationEnd;
const isActivationEnd = (ev: Event) => ev instanceof ActivationEnd;

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  bcLoadedData:any;
  navigationEnd$ = this.router.events.pipe(filter(isNavigationEnd));
  constructor(private router: Router) {}

  ngOnInit() {
    
    this.router.events
      .pipe(
        filter(isActivationEnd),
        pluck("snapshot"),
        pluck("data"),
        buffer(this.navigationEnd$),
        map((bcData: any[]) => bcData.reverse())
      )
      .subscribe(x => {
        // console.log(x)
        this.bcLoadedData = x;
      });
  }

}
