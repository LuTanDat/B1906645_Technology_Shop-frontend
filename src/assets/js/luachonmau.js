var colorList = document.querySelectorAll(".left > .main_img > .color_img > img");
    for(var i = 0; i< colorList.length; i++){
        colorList[i].onclick=function(){
           
            var mainimg = document.querySelector(".left> .main_img> .img_main");
            mainimg.src = this.src;
        }
    }