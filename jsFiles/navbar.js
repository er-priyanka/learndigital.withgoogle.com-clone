let count = 0;
document.querySelector("#more").addEventListener("click", ()=>{
    count++;
    let more_nav = document.querySelector("#more-nav");
    if(count%2!==0)
        more_nav.style.display = 'flex';
    else
        more_nav.style.display = 'none';
})


let logo = document.getElementById("logo");
logo.addEventListener("click", ()=>{
    window.location.href = "index.html";
})


// SignIn or not

let signedIn_data = JSON.parse(localStorage.getItem("SignedIn_data")) || [];

let nav_register = document.querySelector("#nav_register");
let nav_signIn = document.querySelector("#nav_signIn");
let my_learning_plan = document.querySelector("#navbar-elements>#logo+a");
let certification_nav = document.querySelector("#certification-nav");
let certification_more = document.querySelector("#certification-more");
let profile = document.querySelector("#profile");
let sign_out = document.querySelector("#signout");

if(signedIn_data.length>0){
    nav_register.style.display = "none";
    nav_signIn.style.display = "none";
    certification_nav.style.display = "none";

    my_learning_plan.style.display = "inline";
    certification_more.style.display = "inline";
    profile.style.display = "inline";
    sign_out.style.display = "inline";

}

sign_out.addEventListener("click", ()=>{
    signedIn_data = [];
    localStorage.setItem("SignedIn_data", JSON.stringify(signedIn_data));
})



// nav_signIn.addEventListener("click", ()=>{
//     if(nav_signIn.innerText == "Sign out"){
//         nav_register.style.display = "inline";
//         nav_signIn.innerText = "Sign in";
//         signedIn_data = [];
//         localStorage.setItem("SignedIn_data", JSON.stringify(signedIn_data));
//     }
//     else{
//         window.location.href = "signIn.html";
//     }
    
// })