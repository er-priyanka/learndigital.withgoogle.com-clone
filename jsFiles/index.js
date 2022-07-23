let find_course = document.querySelector("#find_course");
find_course.addEventListener("click", ()=>{
    window.location.href = "online_courses.html";
})



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




