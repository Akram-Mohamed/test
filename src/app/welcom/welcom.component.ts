import { Component,HostListener,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.css']
})
export class WelcomComponent implements AfterViewInit {

  mainContainerOffsetTop: any  ;
  navHeight: any = 0 ;

  @HostListener('window:scroll', ['$event']) 
  doSomething(event:any): void {
    this.changePadding(window.pageYOffset );
  
  }
  
ngAfterViewInit(): void {
   this.navHeight = $('.navbar').outerHeight(true);
   this.mainContainerOffsetTop = $('.test').offset()?.top;
  
}
changePadding(windowScrollTop: number): void {
  if (windowScrollTop >= this.mainContainerOffsetTop - this.navHeight) {
    console.log(' done class animate');
    
    $('.navbar').css('padding', '5px');

    
  } else {
    $('.navbar').css('padding', '30px');
       
   }
}


}
