import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/material-component/dialog/view-bill-products/confirmation/change-password/change-password.component';
import { ConfirmationComponent } from 'src/app/material-component/dialog/view-bill-products/confirmation/confirmation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  role:any;
  constructor(private router:Router,
    private dialog:MatDialog) {
  }

  logout(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data ={
      Message:'Logout',
      confirmation:true
    };
   
   const dialogRef = this.dialog.open(ConfirmationComponent,dialogConfig); 
   const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((Response)=>{
    dialogRef.close();
      localStorage.clear();
      this.router.navigate(['/']);
   })
  }
  changePassword(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width="550";
    this.dialog.open(ChangePasswordComponent,dialogConfig);
    
  }
}
