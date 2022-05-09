import { Component, OnInit } from '@angular/core';
import { faLocationArrow,faMailBulk,faMobilePhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faLocationArrow = faLocationArrow;
  faMailBulk = faMailBulk;
  faMobilePhone=faMobilePhone;
  currentYear:number = new Date().getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}
