import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

 @Directive({
     selector:'[appDropDown]'
 })
 
 export class DropdownDirective {
    
    /**
     * this is for click on the button itself to close the dropdown
     */

    // @HostBinding('class.open') isOpen = false; 
    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // } 


    /**
     * this is for clicking everywhere to close the dropdown, see ep 103
     */
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}
 }
 