import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  roster: any[] = [];

  newStaff: any = {
    name: '',
    workingDays: '',
    shift: ''
  };

  isEditing: boolean = false;
  editingIndex: number = -1;

  constructor() {}

  ngOnInit(): void {
    this.loadRoster();
  }

  loadRoster() {
    // Mock data
    this.roster = [
      { name: 'Prabhat Roshan', workingDays: 'Mon-Fri', shift: 'Morning' },
      { name: 'Deepak Singh', workingDays: 'Mon-Wed, Fri', shift: 'Evening' },
      { name: 'Karan Sharma', workingDays: 'Tue-Thu', shift: 'Night' },
    ];
  }

  addStaff() {
    this.roster.push({ ...this.newStaff });
    this.newStaff = { name: '', workingDays: '', shift: '' };
  }

  editStaff(staff: any, index: number) {
    this.newStaff = { ...staff };
    this.isEditing = true;
    this.editingIndex = index;
  }

  updateStaff() {
    this.roster[this.editingIndex] = { ...this.newStaff };
    this.newStaff = { name: '', workingDays: '', shift: '' };
    this.isEditing = false;
    this.editingIndex = -1;
  }

  deleteStaff(index: number) {
    this.roster.splice(index, 1);
  }
}
