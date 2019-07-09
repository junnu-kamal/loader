setup 
step - 1 : git clone  https://github.com/junnu-kamal/loader.git
step - 2 : npm install
make sure to place style.css  globally in the project

directive location  :
src/app/loader.directive.ts
config directive in the required module

usage :
<appLoader size="medium" [display]="true"  screen = "container" ></appLoader>
size  :  "small|medium|large" (parameter will vary the loader size)
display : true | false (parameter will hide and show the loader)
screen : "full|container" (full =  loader will occupy entire screen , conatiner => loader will occupy only the parent div)





