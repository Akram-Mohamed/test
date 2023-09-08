import { AfterViewInit, Component,HostListener } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {
img:string="assets/images/port1.png";

mainContainerOffsetTop: any  ;
navHeight: any = 0 ;

@HostListener('window:scroll', ['$event']) 
doSomething(event:any): void {
  this.changePadding(window.pageYOffset );

}

  ngAfterViewInit(): void {
    this.navHeight = $('.navbar').outerHeight(true);
    this.mainContainerOffsetTop = $('.main-about-holder').offset()?.top;    
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
