import { Modelrole } from './../../models/modelrole';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../services/roles.service'
import { RolesComponent } from '../roles/roles.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {

  name: string;
  description: string;
  options: string;

  visibleAddRole: boolean;

  addRoleForm = new FormGroup({
    roleNameInput: new FormControl(''),
    roleDescriptionInput: new FormControl(''),
    roleOptionsInput: new FormControl ('')
  });

  constructor(private rolesService: RolesService, private router: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigateByUrl('');
  }

  /*addRole(event) {
    event.preventDefault();
    console.log(event);
    let credencial: Modelrole = new Modelrole (this.name, this.description, this.options);
    this.rolesService.addRoles(credencial).subscribe(
      res => {
        console.log(res);
        confirm('Role added OK');
        this.goHome();
      },
      err => {
        console.log(err);
      });
  }*/



  public addRole() {
    let newrole = new Modelrole();

    newrole.name = this.addRoleForm.get('roleNameInput').value;

    this.rolesService.addRoles(newrole)
    .subscribe(res =>{
      let addedRole = res as Modelrole;
      if ((newrole.name === addedRole.name)) {
        alert(`Role ${addedRole.name} successfully created`);
      } else {
        alert(`Error creating Role ${addedRole.name}`);
      }
    });

    this.toggleAddRole();
  }

  public toggleAddRole() {
    this.visibleAddRole = !this.visibleAddRole;
  }

}
