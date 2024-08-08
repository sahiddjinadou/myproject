import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  userId?: string;
  users?: any[];
  constructor(
    private route: ActivatedRoute,
    private userService: HttpService
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((param) =>{
    //   this.userId = param['id']
    // })
    this.userService.getUsers().subscribe((users) => {
      this.users = users
    });

    this.userId = this.route.snapshot.paramMap.get('id') || '';
  }
}
