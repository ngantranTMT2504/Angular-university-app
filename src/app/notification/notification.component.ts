import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  notify: string = "This website uses cookies to provide better user experience."
  hiddenNofication:boolean = false

  closeNotification(){
    this.hiddenNofication = true
  }

}
