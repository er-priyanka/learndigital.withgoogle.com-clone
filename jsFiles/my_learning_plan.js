let learn_in_progress = JSON.parse(localStorage.getItem("courses_started")) || [];

let inprogress1 = document.querySelector("#inProgress");
inprogress1.innerText = learn_in_progress.length;

let my_learning = document.querySelector("#my_learning");

inProgress(learn_in_progress);

function inProgress(learn_in_progress){
    
    my_learning.innerHTML = "";

    learn_in_progress.forEach(e => {
        let course = document.createElement("div");
        // course.addEventListener("click", ()=>{
        //     clickfun(e);
        // })
        
        let img = document.createElement("img");
        img.src = e.imglink;

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
    
        
        div1.append(courseName, provider, bar, clock);
        div2.append(right_arrow);

        div.append(div1, div2);
        course.append(img, div);
        document.querySelector("#my_learning").append(course);
    });
}