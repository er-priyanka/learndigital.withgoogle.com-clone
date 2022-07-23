let learn_in_progress = JSON.parse(localStorage.getItem("courses_started")) || [];
let my_learning = document.querySelector("#my_learning");

let completed_data = JSON.parse(localStorage.getItem("completed_data")) || [];

let inprogress1 = document.querySelector("#inProgress");
inprogress1.innerText = learn_in_progress.length;

let completed1  = document.querySelector("#completed");
completed1.innerText = completed_data.length;

let inProgress_parent = document.querySelector("#inProgress_parent");
inProgress_parent.addEventListener("click", ()=>{
    inProgress_parent.style.borderBottom = "2px solid blue";
    completed_parent.style.borderBottom = "none";
    inProgress(learn_in_progress);
})

let completed_parent = document.querySelector("#completed_parent");
completed_parent.addEventListener("click", ()=>{
    completed_parent.style.borderBottom = "2px solid blue";
    inProgress_parent.style.borderBottom = "none";
    complete(completed_data);
})


inProgress_parent.style.borderBottom = "2px solid blue";
inProgress(learn_in_progress);



function emptyInProgress(){
    let box = document.createElement("div");
    box.setAttribute("class", "no_course");

    let que = document.createElement("h2");
    que.innerText = "What would you like to learn?";

    let p = document.createElement("p");
    p.innerText = "Get started by adding courses to your plan.";

    let find_course = document.createElement("button");
    find_course.innerText = "Find courses";
    find_course.style.cursor = "pointer";

    find_course.addEventListener("click", ()=>{
        window.location.href = "online_courses.html";
    })

    box.append(que, p, find_course);
    document.querySelector("#my_learning").append(box);
}

function emptyCompleted(){
    let box = document.createElement("div");
    box.setAttribute("class", "no_course");

    let que = document.createElement("h2");
    que.innerText = "What would you like to learn?";

    let p = document.createElement("p");
    p.innerText = "Go back to your courses in progress";

    let find_course = document.createElement("button");
    find_course.innerText = "View in progress";
    find_course.style.cursor = "pointer";

    find_course.addEventListener("click", ()=>{
        inProgress_parent.style.borderBottom = "2px solid blue";
        completed_parent.style.borderBottom = "none";
        inProgress(learn_in_progress);
    })

    box.append(que, p, find_course);
    document.querySelector("#my_learning").append(box);
}


function inProgress(learn_in_progress){
    
    my_learning.innerHTML = "";

    if(learn_in_progress.length<=0){
        emptyInProgress();
    }

    learn_in_progress.forEach((e, i )=> {
        let course = document.createElement("div");
        // course.addEventListener("click", ()=>{
        //     clickfun(e);
        // })
        
        let img = document.createElement("img");
        img.src = e.imglink;

        let deleteIcon = document.createElement("i");
        deleteIcon.setAttribute("class", "fa-solid fa-trash");
        deleteIcon.addEventListener("click", ()=>{
            deleteFn(e, i);
        })

        let courseName = document.createElement("h3");
        courseName.innerText = e.name;

        let provider = document.createElement("p");
        provider.innerText = `Created by ${e.provider}`;

        let bar = document.createElement("i");
        bar.setAttribute("class", "fa-solid fa-bars");

        let modules = document.createElement("span");
        modules.innerText = `Modules:${e.modules}`;
        bar.append(modules);

        let clock = document.createElement("i");
        clock.setAttribute("class", "fa-regular fa-clock");

        let hours = document.createElement("span");
        hours.innerText = `Hours:${e.hours}`;
        clock.append(hours);

        let div = document.createElement("div");
        div.setAttribute("class", "course_discr");

        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        
        let right_arrow = document.createElement("i");
        right_arrow.setAttribute("class", "fa-solid fa-arrow-right");
        right_arrow.style.cursor = "pointer";
        right_arrow.addEventListener("click", ()=>{
            completedfun(e, i);
        })
        
        div1.append(courseName, provider, bar, clock);
        div2.append(right_arrow);

        div.append(div1, div2);
        course.append(img, deleteIcon, div);
        document.querySelector("#my_learning").append(course);
    });
}

function complete(completed_data){
    
    my_learning.innerHTML = "";

    if(completed_data.length<=0){
        emptyCompleted();
    }

    completed_data.forEach((e, i )=> {
        let course = document.createElement("div");
        // course.addEventListener("click", ()=>{
        //     clickfun(e);
        // })
        
        let img = document.createElement("img");
        img.src = e.imglink;

        // let deleteIcon = document.createElement("i");
        // deleteIcon.setAttribute("class", "fa-solid fa-trash");
        // deleteIcon.addEventListener("click", ()=>{
        //     deleteFn(e, i);
        // })

        let courseName = document.createElement("h3");
        courseName.innerText = e.name;

        let provider = document.createElement("p");
        provider.innerText = `Created by ${e.provider}`;

        let bar = document.createElement("i");
        bar.setAttribute("class", "fa-solid fa-bars");

        let modules = document.createElement("span");
        modules.innerText = `Modules:${e.modules}`;
        bar.append(modules);

        let clock = document.createElement("i");
        clock.setAttribute("class", "fa-regular fa-clock");

        let hours = document.createElement("span");
        hours.innerText = `Hours:${e.hours}`;
        clock.append(hours);

        let div = document.createElement("div");
        div.setAttribute("class", "course_discr");

        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        
        // let right_arrow = document.createElement("i");
        // right_arrow.setAttribute("class", "fa-solid fa-arrow-right");
        // right_arrow.style.cursor = "pointer";
        // right_arrow.addEventListener("click", ()=>{
        //     completedfun(e, i);
        // })
        
        div1.append(courseName, provider, bar, clock);
        // div2.append(right_arrow);

        div.append(div1);
        course.append(img, div);
        document.querySelector("#my_learning").append(course);
    });
}

function deleteFn(e, i){
    learn_in_progress.splice(i, 1);
    localStorage.setItem("courses_started", JSON.stringify(learn_in_progress));
    alert("Course Removed");
    inprogress1.innerText = learn_in_progress.length;

    window.location.reload();
    
    inProgress(learn_in_progress);
  
}



function completedfun(e, i){
    alert(`Congratulations, you have successfully completed ${e.name} course`);
    if(!completed_data.includes(e.id)){
        completed_data.push(e);
        localStorage.setItem("completed_data", JSON.stringify(completed_data));
    }
        
    learn_in_progress.splice(i, 1);
    localStorage.setItem("courses_started", JSON.stringify(learn_in_progress));
    
    inprogress1.innerText = learn_in_progress.length;
    window.location.reload();
 
    inProgress(learn_in_progress);
    
}


