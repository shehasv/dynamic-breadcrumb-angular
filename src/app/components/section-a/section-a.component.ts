import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section-a',
  templateUrl: './section-a.component.html',
  styleUrls: ['./section-a.component.scss']
})
export class SectionAComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    // this.router.data.subscribe((data) => {
    //   console.log(data)
    // })
  }

}
