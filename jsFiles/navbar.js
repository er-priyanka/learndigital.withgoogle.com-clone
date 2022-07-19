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