
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/*var submenu = document.querySelector("#subnavigator");

submenu.addEventListener('mouseover',function(){
    submenu.style="width:calc(240px - 1rem)";
},false);

submenu.addEventListener('mouseout',function(){
    submenu.style="";
},false);
*/
var subm = document.querySelectorAll("#navigator ul li.submenu");
var ant, actual;
for(var i=0;i<subm.length;i++){
    subm[i].addEventListener('mouseover',function(){
        actual = this.dataset.menu;
        //submenu.style="width:calc(240px - 1rem)";
        if(actual != ant){
            this.querySelector(".submenu-content").style="display:block";
        }
        ant = this.dataset.menu
    },false);

  subm[i].addEventListener('mouseout',function(){
      //submenu.style="";
  },false);
}