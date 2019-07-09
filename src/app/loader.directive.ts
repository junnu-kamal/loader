import { Directive ,Input,ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: 'appLoader'
})
export class LoaderDirective implements OnInit {
  @Input('size') loaderSize : string = "large";
  @Input('display') display : boolean = false;
  @Input('screen') screen : string = 'container';
  constructor(private el: ElementRef) 
  { 
    
  }
  ngOnInit(){
    this.LoaderSetp()
  }
  private LoaderSetp(){
    this.el.nativeElement.appendChild(this.createLoader())
    if(this.display ==  true){
       this.el.nativeElement.style.display = "table";
    }
    else{
       this.el.nativeElement.style.display = "none";
    }
    this.AdjustScreen();
  }
  private AdjustScreen(){
    
    if(this.screen == "container"){
      this.el.nativeElement.style.height = this.el.nativeElement.parentNode.clientHeight+"px";
      this.el.nativeElement.style.width = this.el.nativeElement.parentNode.clientHeight+"px";
      this.el.nativeElement.style.backgroundColor = "#000000";
      this.el.nativeElement.style.opacity = "0.4"
    }
    else{
      this.el.nativeElement.style.position = "fixed";
      this.el.nativeElement.style.height = "100%";
      this.el.nativeElement.style.width = "100%";
      this.el.nativeElement.style.top = "0";
      this.el.nativeElement.style.left = "0";
      this.el.nativeElement.style.backgroundColor = "#000000";
      this.el.nativeElement.style.opacity = "0.4";
    }
  }
  private createLoader(){
    let loaderHeight;
    let loaderWidth;
    if(this.loaderSize == "small"){
       loaderHeight = 50;
       loaderWidth  = 50;
    }
    else if(this.loaderSize == "medium"){
       loaderHeight = 80;
       loaderWidth  = 80;
    }
    else{
       loaderHeight = 120;
       loaderWidth  = 120;
    }
    let element = document.createElement("div");
    element.classList.add('loader');
    element.style.height = loaderHeight+'px';
    element.style.width = loaderHeight+'px';
    element.style.margin = "auto";
    let td = document.createElement("td")
    td.style.display = "table-cell";
    td.style.verticalAlign = "middle";
    td.appendChild(element);
    return td;
    
  }
  
  
}
