import { Component,AfterViewInit,ViewChild,ElementRef,HostListener } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements AfterViewInit {

  @ViewChild('userName') userName!:ElementRef ; 

  constructor(){

  }
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
    
    inputCheck(target:any){
      
        if (target.value.length <= 0) {

                $(target).prev().children().eq(0).animate({
                    top: '100%',
                  },500);
      
              }
                
              
              else {
                $(target).prev().children().animate({
                  top: '0%',
                },500);
              
              }


            }


 
          
  }