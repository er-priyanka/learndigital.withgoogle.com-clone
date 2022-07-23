let courseDetails = JSON.parse(localStorage.getItem("clicked-course"))|| {};

//top section
let top_section = document.querySelector(".top-section");


let div1 = document.createElement("div");
let h1 = document.createElement("h1");
h1.innerText = courseDetails.name;

let p =document.createElement("p");
p.innerText = "Find out how to build a digital presence, sell to customers online, and stay safe from hackers.";

let button = document.createElement("button");
button.innerText = "Start free course";
button.setAttribute("id", "start_course");
div1.append(h1, p, button);
button.addEventListener("click", start_courseFn);

let div2 = document.createElement("div");
let img = document.createElement("img");
img.src = courseDetails.imglink;
div2.append(img);

top_section.append(div1, div2);


//Modules and hours

let modules = document.querySelector("#modules");
modules.innerText = `Modules: ${courseDetails.modules}`;

let hours = document.querySelector("#hours");
hours.innerText = `Hours: ${courseDetails.hours}`;


// start course 
let courses_started = JSON.parse(localStorage.getItem("courses_started")) || [];
let signedInData = JSON.parse(localStorage.getItem("SignedIn_data")) || [];
function start_courseFn(){
    if(signedInData.length>0){
        let present = courses_started.filter((e)=>{
            return e.id == courseDetails.id;
        });

        if(present.length == 0){
            courses_started.push(courseDetails);
            localStorage.setItem("courses_started", JSON.stringify(courses_started));
        }
        window.location.href = "my_learning_plan.html";
    }
    else{
        window.location.href = "signIn.html";
    }
}




