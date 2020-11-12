class Slider1{
    constructor(){
   this.images = [];
   this.images[0] = "image/js2.png";
   this.images[1] = "image/html2.jpg";
   this.images[2] = "image/css2.jpg";
   this.links = [];
   this.links[0] = "https://www.youtube.com/playlist?list=PLMTdZ61eBnyp1nMM8mGRzpwuu6FNxFy0D";
   this.links[1] = "https://www.youtube.com/playlist?list=PLMTdZ61eBnyrnapIyOphXAkIcR5DDOGkz";
   this.links[2] = "https://www.youtube.com/playlist?list=PLMTdZ61eBnyoxjc9Prw0uhwgp6YZ2-_sg";
   this.counter = [];
   this.nohx();
   setInterval(()=>{
       this.nohx();
   },3000)
    }
    nohx(){
       if(this.counter < this.images.length - 1){
         this.counter++;
       }
       else{
          this.counter = 0;
       }
       document.slider_show.src = this.images[this.counter];
       document.getElementById("LinkImg").href = this.links[this.counter];
    }
}
onload = new Slider1();