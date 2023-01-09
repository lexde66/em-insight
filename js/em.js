function changePageStyle(colorVar){

    var objCss = document.getElementById("extCss");
    var objHd = document.getElementById("imgHd");
    var objFt = document.getElementById("imgFt");

    if(colorVar == 1){ // blue
        objCss.setAttribute("href","./css/emsg_blue.css");
        objHd.setAttribute("src","./image/logoft_color_navy_blue.png");
        objFt.setAttribute("src","./image/logo_color_rev_blue.png");

    }else if (colorVar == 2){ // white
        objCss.setAttribute("href","./css/emsg_white.css");
        objHd.setAttribute("src","./image/logoft.png");
        objFt.setAttribute("src","./image/logo.png");
    }else if (colorVar == 4){ // white
        objCss.setAttribute("href","./css/emsg_bluegreen.css");
        objHd.setAttribute("src","./image/logoft_bluegreen.png");
        objFt.setAttribute("src","./image/logo_bluegreen.png"); 
    }else{ //green
        objCss.setAttribute("href","./css/emsg_green.css");
        objHd.setAttribute("src","./image/logoft_color_green.png");
        objFt.setAttribute("src","./image/logo_color_green.png");
    }
}