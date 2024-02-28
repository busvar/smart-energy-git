import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  public path: string | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.path = "assets/users/"+params['path'];
    })
  }

}
