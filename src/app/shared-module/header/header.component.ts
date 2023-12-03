import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() sideData=new EventEmitter();

  @Input() overviewData:boolean=false;

  ngOnInit(): void {
    // console.log(this.overviewData,"hello")
  }

  sideClick(){
    this.sideData.emit(false)
  }
}
