
document.querySelector(".none-active").style.visibility="hidden"
document.querySelector(".active").style.visibility="visible"
let slidernav=document.querySelector(".carousel")
let smallAside=document.querySelector(".active")
let largeAside=document.querySelector(".none-active")
let windowWidth=window.innerWidth
let i=0
document.querySelector("span").addEventListener("click",function(){
    i+=1
    if(i%2===0&windowWidth>=1312){
        slidernav.style.marginLeft="75px"   
        smallAside.style.visibility="visible"
        largeAside.style.visibility="hidden"
        document.querySelector("main").style.marginLeft="75px"
    }
    if(i%2===0&windowWidth<=1312){  
        smallAside.style.visibility="visible"
        largeAside.style.visibility="hidden"
        document.querySelector("main").style.opacity="1.0"
    document.querySelector(".carousel").style.opacity="1.0"
    document.querySelector("nav").style.opacity="1.0"
    }

if(largeAside.style.visibility==="hidden"&i%2===1&windowWidth>=1312){
    slidernav.style.marginLeft="245px"
    smallAside.style.visibility="hidden"
    largeAside.style.visibility="visible"
document.querySelector("main").style.marginLeft="245px"}
if(largeAside.style.visibility==="hidden"&i%2===1&windowWidth<=1312){
    smallAside.style.visibility="hidden"
    largeAside.style.visibility="visible"
    document.querySelector("main").style.opacity="0.4"
    document.querySelector(".carousel").style.opacity="0.4"
    document.querySelector("nav").style.opacity="0.4"
}
})



setInterval(function reload(){
    windowWidth=window.innerWidth
},1)