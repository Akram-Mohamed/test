import { AfterViewInit, Component,Directive,HostListener,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit ,OnChanges  {

  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
  }


  ngAfterViewInit(): void {
    // secoundSecMOveOffset=$('#Mainsecond_id').offset().top ;

   
  
  }


}
