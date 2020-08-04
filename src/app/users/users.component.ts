import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  addUser = false
  userData =[]
  addUserForm = this.formBuilder.group({
    "name":['', Validators.required],
    "email": ['', Validators.required],
    "phone": ['', Validators.required],
    // "favSubjects": ['', Validators.required],
  })
  dropdownList = [];
  selectedItems = [];
  // dropdownSettings = {};
  dropdownSettings : IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Math' },
      { item_id: 2, item_text: 'C lang' },
      { item_id: 3, item_text: 'Java' },
      { item_id: 4, item_text: 'Javascript' },
      { item_id: 5, item_text: 'HTML' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Java' },
      { item_id: 4, item_text: 'Javascript' }
    ];
    let data = JSON.parse(localStorage.getItem("userData"))
    if(data != null){
      this.userData = data
    }
    // console.log(JSON.parse(localStorage.getItem("userData")) )
  }
  onItemSelect(item: any) {
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
   submitForm(){
     let data = {
       name : this.addUserForm.controls['name'].value,
       email : this.addUserForm.controls['email'].value,
       phone : this.addUserForm.controls['phone'].value,
       favSubjects : this.selectedItems
     }
     this.userData.push(data)
     localStorage.setItem("userData",JSON.stringify(this.userData))
    //  this.addUser = false;
    //  this.addUserForm.reset()
   }
  
}
