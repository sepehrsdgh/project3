
document.querySelector(".none-active").style.visibility="hidden"
document.querySelector(".active").style.visibility="visible"
let slidernav=document.querySelector(".carousel")
let smallAside=document.querySelector(".active")
let largeAside=document.querySelector(".none-active")
let i=0
document.querySelector("span").addEventListener("click",function(){
    i+=1
    if(i%2===0){
        slidernav.style.marginLeft="75px"   
        smallAside.style.visibility="visible"
        largeAside.style.visibility="hidden"
        document.querySelector("main").style.marginLeft="75px"
    }

if(largeAside.style.visibility="hidden"&i%2===1){
    slidernav.style.marginLeft="250px"
    smallAside.style.visibility="visible"
    largeAside.style.dvisibility="hidden"
document.querySelector("main").style.marginLeft="250px"}
})
