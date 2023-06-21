console.log("passe")



selector = 0
function nextprev(n){
    console.log(selector)
    if (n == -1){
        if (selector > 0){
            el = document.getElementsByClassName("m"+selector)
            el[0].setAttribute("hidden","true")
            console.log(el)
            selector = selector - 1
            el2 = document.getElementsByClassName("m"+selector)
            el2[0].removeAttribute("hidden")
            console.log(el2)
        }
    }
    else {
        if (selector <2){
            el = document.getElementsByClassName("m"+selector)
            el[0].setAttribute("hidden","true")
            console.log(el)
            selector = selector + 1
            el2 = document.getElementsByClassName("m"+selector)
            el2[0].removeAttribute("hidden")
            console.log(el2)
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    nav = navigator.userAgent

    if (nav.indexOf("Firefox")==-1){
        img = document.getElementsByClassName('m0')
        console.log(img)
        img[0].setAttribute("style", "width: 30% !important;")
        img = document.getElementsByClassName('m1')
        console.log(img)
        img[0].setAttribute("style", "width: 30% !important;")
        img = document.getElementsByClassName('m2')
        console.log(img)
        img[0].setAttribute("style", "width: 30% !important;")
        
    }
})
