let queAngles = document.querySelectorAll(".queAngle");
let answers = document.querySelectorAll(".ans");

let makeDefaultAngle = ()=>{
    queAngles.forEach((e, i)=>{
        e.classList.add("fa-angle-down");
        e.classList.remove("fa-angle-up");
        answers[i].style.display = "none";
    })
} 


queAngles.forEach((e, i)=>{
    
    e.style.cursor = 'pointer';
    let clicks = 0;
    e.addEventListener("click", ()=>{
        clicks++;
        makeDefaultAngle();
        
        if(e.classList[2] =="fa-angle-down" && clicks%2==1){
            e.classList.add("fa-angle-up");
            e.classList.remove("fa-angle-down");
            answers[i].style.display = "contents";
        }
        else{
            e.classList.add("fa-angle-down");
            e.classList.remove("fa-angle-up");
            answers[i].style.display = "none";
        }
    })
})


// SignIn or not

let signedIn_data = JSON.parse(localStorage.getItem("SignedIn_data")) || [];
let nav_register = document.querySelector("#nav_register");
let nav_signIn = document.querySelector("#nav_signIn");

if(signedIn_data.length>0){
    nav_register.style.display = "none";
    nav_signIn.innerText = "Sign out";
}



nav_signIn.addEventListener("click", ()=>{
    if(nav_signIn.innerText == "Sign out"){
        nav_register.style.display = "inline";
        nav_signIn.innerText = "Sign in";
        signedIn_data = [];
        localStorage.setItem("SignedIn_data", JSON.stringify(signedIn_data));
    }
    else{
        window.location.href = "signIn.html";
    }
    
})

