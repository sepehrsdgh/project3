
let slidernav=document.querySelector(".carousel")
let smallAside=document.querySelector(".active")
let largeAside=document.querySelector(".none-active")
let windowWidth=window.innerWidth
let i=0
largeAside.style.visibility="hidden"

document.querySelector(".hamburger-menu-icon").addEventListener("click",function(){
    i+=1
    if(i%2===0&window.innerWidth>=1312){
        slidernav.style.marginLeft="75px"   
        smallAside.style.visibility="visible"
        largeAside.style.visibility="hidden"
        document.querySelector("main").style.marginLeft="75px"
        document.querySelector("main").style.opacity="1.0"
    document.querySelector(".carousel").style.opacity="1.0"
    document.querySelector("nav").style.opacity="1.0"

    }
    if(i%2===0&window.innerWidth<=1312){  
        smallAside.style.visibility="visible"
        largeAside.style.visibility="hidden"
        document.querySelector("main").style.opacity="1.0"
    document.querySelector(".carousel").style.opacity="1.0"
    document.querySelector("nav").style.opacity="1.0"
    document.querySelector("main").style.marginLeft="75px"
    slidernav.style.marginLeft="75px"
    }
    if(i%2===0&window.innerWidth<=791){  
        smallAside.style.visibility="hidden"
        largeAside.style.visibility="hidden"
        document.querySelector("main").style.opacity="1.0"
    document.querySelector(".carousel").style.opacity="1.0"
    document.querySelector("nav").style.opacity="1.0"
    slidernav.style.marginLeft="0px"
    document.querySelector("main").style.marginLeft="0px"
    }


if(largeAside.style.visibility==="hidden"&i%2===1&window.innerWidth>=1312){
    slidernav.style.marginLeft="245px"
    smallAside.style.visibility="hidden"
    largeAside.style.visibility="visible"
document.querySelector("main").style.marginLeft="245px"
document.querySelector("main").style.opacity="1.0"
    document.querySelector(".carousel").style.opacity="1.0"
    document.querySelector("nav").style.opacity="1.0"
}
if(largeAside.style.visibility==="hidden"&i%2===1&window.innerWidth<=1312){
    smallAside.style.visibility="hidden"
    largeAside.style.visibility="visible"
    document.querySelector("main").style.opacity="0.4"
    document.querySelector(".carousel").style.opacity="0.4"
    document.querySelector("nav").style.opacity="0.4"
    document.querySelector("main").style.marginLeft="75px"
    slidernav.style.marginLeft="75px"
}
if(largeAside.style.visibility==="hidden"&i%2===1&window.innerWidth<=791){
    smallAside.style.visibility="hidden"
    largeAside.style.visibility="visible"
    document.querySelector("main").style.opacity="0.4"
    document.querySelector(".carousel").style.opacity="0.4"
    document.querySelector("nav").style.opacity="0.4"
    document.querySelector("main").style.marginLeft="0px"
    slidernav.style.marginLeft="0px"
}

})

window.addEventListener("resize",function(){
    if(i%2===0&window.innerWidth>=1312){
        smallAside.style.visibility="visible"
        largeAside.style.visibility="hidden"
        slidernav.style.marginLeft="75px"   
        document.querySelector("main").style.marginLeft="75px"
        document.querySelector("main").style.opacity="1.0"
    document.querySelector(".carousel").style.opacity="1.0"
    document.querySelector("nav").style.opacity="1.0"

    }
    if(i%2===0&window.innerWidth<=1312){  
        smallAside.style.visibility="visible"
        document.querySelector("main").style.opacity="1.0"
    document.querySelector(".carousel").style.opacity="1.0"
    document.querySelector("nav").style.opacity="1.0"
    document.querySelector("main").style.marginLeft="75px"
    slidernav.style.marginLeft="75px"
    }
    if(i%2===0&window.innerWidth<=791){ 
        smallAside.style.visibility="hidden" 
        document.querySelector("main").style.opacity="1.0"
    document.querySelector(".carousel").style.opacity="1.0"
    document.querySelector("nav").style.opacity="1.0"
    slidernav.style.marginLeft="0px"
    document.querySelector("main").style.marginLeft="0px"
    }


if(i%2===1&window.innerWidth>=1312){
    smallAside.style.visibility="hidden"
        largeAside.style.visibility="visible"
    slidernav.style.marginLeft="245px"
document.querySelector("main").style.marginLeft="245px"
document.querySelector("main").style.opacity="1.0"
    document.querySelector(".carousel").style.opacity="1.0"
    document.querySelector("nav").style.opacity="1.0"
}
if(i%2===1&window.innerWidth<=1312){
    
    document.querySelector("main").style.opacity="0.4"
    document.querySelector(".carousel").style.opacity="0.4"
    document.querySelector("nav").style.opacity="0.4"
    document.querySelector("main").style.marginLeft="75px"
    slidernav.style.marginLeft="75px"
}
if(i%2===1&window.innerWidth<=791){
    smallAside.style.visibility="hidden"
    document.querySelector("main").style.opacity="0.4"
    document.querySelector(".carousel").style.opacity="0.4"
    document.querySelector("nav").style.opacity="0.4"
    document.querySelector("main").style.marginLeft="0px"
    slidernav.style.marginLeft="0px"
}

})



