import { ReservationService } from './../../services/reservation.service';
import { GearService } from './../../services/gear.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Gear } from 'src/app/models/gear';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  // F I E L D S
  gearList: Gear[] = [];
  public isCollapsed: boolean[] = [];
  newGear: Gear = new Gear();
  updatedGear: Gear = new Gear();
  public selecteditem: Gear = new Gear;
  editedUser: User = new User();
  reservations: Reservation = new Reservation();
  loggedInUser: User = new User();
  myGear: Gear[] = [];
  myReservations: Reservation[] = [];






  // tslint:disable-next-line: no-shadowed-variable

  // C O N S T R U C T O R
  constructor(private gearSrv: GearService,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private resService: ReservationService) { }



  ngOnInit() {
    const cred = this.authService.getCredentials();

    if (cred === null) {
      this.router.navigateByUrl('/login');

    }

    this.loadGear();
  }


  // LOAD THE GEAR

  loadGear() {
    this.gearList = [];

    this.authService.getUserByUsername(this.authService.getLoggedInUsername()).subscribe(
      yes => {
        this.loggedInUser = yes;
        console.log('Got logged in user:');
        console.log(this.loggedInUser);


        this.gearSrv.index().subscribe(
          (aGoodThingHappened) => {
            console.log(aGoodThingHappened);

            aGoodThingHappened.forEach(gear => {

              if (gear.user.id === this.loggedInUser.id) {
                console.log("*************************get user id");
                console.log(gear.user.id);
                console.log(this.loggedInUser.id);
                this.gearList.push(gear);

                // this.loggedInUser = e.user;
              }
            });
          },
          (didntWork) => {
            console.log(didntWork);
          }
        );
      },
      no => {
        console.error('Error getting logged in user');
        console.error(no);
      }
    );
    console.log(this.loggedInUser);
    // this.loggedInUser = this.userService.getUserById();
  }






  // DELETE GEAR
  deleteGear(id: number) {

    console.log("in delete gear profile comp");
    console.log(id);

    this.gearSrv.destroy(id).subscribe(
      (good) => {
        console.log(good);


      },
      (bad) => {
        console.log("error " + bad);
      }
    );
    this.selecteditem = null;
    this.ngOnInit();
  }




  // ADD GEAR

  addGear() {
    console.log("in add gear " + this.newGear.active);
    this.newGear.active = true;
    this.newGear.available = true;
    console.log("in add gear " + this.newGear.active);
    this.gearSrv.create(this.newGear).subscribe(
      newGear => {
        this.loadGear();
        this.newGear = new Gear();
      },
      err => console.log('Observer got an error: ' + err)
    );
    this.loadGear();
  }


  onClick(item: any, lgModal: any) {

    this.selecteditem = item;

    lgModal.show();

  }

  onClickGearPopUp(item: any, lgModal: any) {

    this.selecteditem = item;

    lgModal.show();

  }








  // UPDATE THE GEAR

  updateGear() {

    this.updatedGear.id = this.selecteditem.id;

    if (this.updatedGear.name === null || this.updatedGear.name === undefined) {
      this.updatedGear.name = this.selecteditem.name;
    }
    if (this.updatedGear.active !== true || this.updatedGear.active !== true) {
      this.updatedGear.active = true;
    }
    if (this.updatedGear.available !== true || this.updatedGear.available !== true) {
      this.updatedGear.available = true;
    }
    if (this.updatedGear.description === null || this.updatedGear.description === undefined) {
      this.updatedGear.description = this.selecteditem.description;
    }
    if (this.updatedGear.imageUrl === null || this.updatedGear.imageUrl === undefined) {
      this.updatedGear.imageUrl = this.selecteditem.imageUrl;
    }
    if (this.updatedGear.price === null || this.updatedGear.price === undefined) {
      this.updatedGear.price = this.selecteditem.price;
    }

    console.log("in profile comp update + gear id" + this.updatedGear.id + "  " + this.updatedGear.description);
    console.log("in profile comp update + gear name" + this.updatedGear.name);
    this.selecteditem = null;
    this.gearSrv.update(this.updatedGear).subscribe(
      data => {
        this.ngOnInit();
        this.updatedGear = data;
        this.updatedGear = null;
        this.selecteditem = null;
      },
      err => console.log('Update got an error: ' + err));

    this.ngOnInit();

  }




  // UPDATE USER

  updateUser() {



    this.editedUser.id = this.loggedInUser.id;
    this.editedUser.password = this.loggedInUser.password;
    this.editedUser.email = this.loggedInUser.email;
    this.editedUser.role = this.loggedInUser.role;

    if (this.editedUser.firstName === null || this.editedUser.firstName === undefined) {
      this.editedUser.firstName = this.loggedInUser.firstName;
    }
    if (this.editedUser.lastName === null || this.editedUser.lastName === undefined) {
      this.editedUser.lastName = this.loggedInUser.lastName;
    }
    if (this.editedUser.imageUrl === null || this.editedUser.imageUrl === undefined) {
      this.editedUser.imageUrl = this.loggedInUser.imageUrl;
    }
    if (this.editedUser.phone === null || this.editedUser.phone === undefined) {
      this.editedUser.phone = this.loggedInUser.phone;
    }



    console.log("in profile comp update + user id" + this.editedUser.id + ' ' + this.editedUser.lastName + " " + this.editedUser.phone);

    this.userService.update(this.editedUser).subscribe(
      data => {
        // this.editedUser = data;
        this.editedUser = null;
        this.selecteditem = null;

      },
      err => console.log('Update got an error: ' + err)
    );
    this.editedUser = null;
    this.ngOnInit();



  }
}


// LOAD RESERVATIONS FOR USER

  // loadReseravtions() {
  //   this.myReservations = [];

  //   this.authService.getUserByUsername(this.authService.getLoggedInUsername()).subscribe(
  //     yes => {
  //       this.loggedInUser = yes;
  //       console.log('Got logged in user:');
  //       console.log(this.loggedInUser);


  //       this.resService.index().subscribe(
  //         (aGoodThingHappened) => {
  //           console.log(aGoodThingHappened);

  //           aGoodThingHappened.forEach(res => {

  //             if (res.user.id === this.loggedInUser.id) {
  //               this.myReservations.push(res);

  //               // this.loggedInUser = e.user;
  //             }
  //           });
  //         },
  //         (didntWork) => {
  //           console.log(didntWork);
  //         }
  //       );
  //     },
  //     no => {
  //       console.error('Error getting logged in user');
  //       console.error(no);
  //     }
  //   );
  //   console.log(this.loggedInUser);
  // }


