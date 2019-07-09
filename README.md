<b>setup </b><br>
step - 1 : git clone  https://github.com/junnu-kamal/loader.git <br>
step - 2 : npm install<br>
make sure to place style.css  globally in the project<br>

<b>directive location  :</b><br>
src/app/loader.directive.ts <br>
config directive in the required module<br>

<b>usage :</b><br><br>
<appLoader size="medium" [display]="true"  screen = "container" > <span></appLoader> </span> <br><br>
size  :  "small|medium|large" (parameter will vary the loader size)<br>
display : true | false (parameter will hide and show the loader)<br>
screen : "full|container" (full =  loader will occupy entire screen , conatiner => loader will occupy only the parent div)<br>





