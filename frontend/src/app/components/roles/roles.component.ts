import { Modelrole } from './../../models/modelrole';
import { RolesService } from './../../services/roles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private rolesService: RolesService) { }

  roles: Modelrole[];

  ngOnInit(): void {
  }

  public getRoles() {
    this.rolesService.getRoles().subscribe(
      (data) => {
        this.roles = data;
        console.log(this.roles);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

}
