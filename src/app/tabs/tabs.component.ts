import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  constructor(
    protected readonly activatedRoute: ActivatedRoute,
    protected readonly router: Router
  ) {}

  ngOnInit() {}

  schedule(item: string) {
    this.router.navigate(['tabs/'+item]);
  }
}
