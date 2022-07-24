//course data

let courseData = [
    {
        imglink: "https://lh3.googleusercontent.com/21Mlc_bfmIP34V4MgJMtr1S9sGbxNGVdj7ncT_jmiQNAhvqJNYwWhnOdKuY2h57SpOuaOk_aF5dAnrz0w4tbDLVy0wxZHJCUQC3y=s344",
        name : "Fundamentals of digital marketing",
        provider:"Google",
        id:1,
        modules:26,
        hours : 40,
    },
    {   
        imglink: "https://lh3.googleusercontent.com/s40RhwlQAFPM_y7ODSiA5VH6Lhjrltnh-tz295OydaXWGxU8ujKtEEAuM7qsJkrMThodotQEjqCRPJpr724puF4OXkb4vNOysdWW6w=s299",
        name : "Get a business online",
        provider:"Google",
        id:2,
        modules:7,
        hours:3,
    },

    {
        imglink:"https://lh3.googleusercontent.com/jHVvz5HCnhayZkkNznzBmvG1Q1NOIduJe3FK9_TigCL8tQkCn6r1MMiBYVNqSJVIJhaoOSK8vRsdBjQeX9AE1Nfm6cnS8QQclvTR=s344",
        name : "Make sure customers find you online",
        provider:"Google",
        id:3,
        modules:4,
        hours:3,
    },

    {
        imglink:"https://lh3.googleusercontent.com/MivLrLy4ftKvhLd50wEBg97R5cTOJwlNsNR3EY9Ufpsb4HsNJhjUHc7aNFk-TUP-fFgFoC7cOVbs_XJownovu_OjaXO5qBgu_cEzcv8=s344",
        name : "Promote a business with online advertising",
        provider:"Google",
        id:4,
        modules:5,
        hours:3,
    },

    {
        imglink:"https://lh3.googleusercontent.com/osGU8wu8smh2rRagLrMz00riN7bjEpeNPiyw_hGes-gikvJE1EidiLpGQApVEoon3acem0B6LmGEthGQQO3GDePl9-NkneVPdgMy4w=s344",
        name : "Expand a business to other countries",
        provider:"Google",
        id:5,
        modules:1,
        hours:1,
    },

    {
        imglink:"https://lh3.googleusercontent.com/06tZ0JGBZsO-xYxBv2y2ulUUU152bko2dg_XGtH3d3nbB8h8e6LU8mXTDIiTtoIrNu-ATC19XXkO5bIfhoRY6QSTQIqGTk4ohFlY=s344",
        name : "Connect with customers over mobile",
        provider:"Google",
        id:6,
        modules:2,
        hours:1,
    },

    {
        imglink:"https://lh3.googleusercontent.com/RId9JdZcsWSryO10onr_cjmVL2aHEdTEyt2eiUyPYbFTWK4BxNG5Nd4r2mTEyptGo4MpzLumNmdLQVkJgDCfJ1PsSQsdnSc053axsw=s344",
        name : "Use Google to Get a New Job",
        provider:"Applied Digital Skills",
        id:7,
        modules:7,
        hours:6,
    },

    {
        imglink:"https://lh3.googleusercontent.com/Kg8wsO786j1lJTKPCzuCPAxwpCTTF_RVhemQJQl3ZCrIDAOL-QYGV8vWST6_XBNPBK7YmeaXLph_9r1mf2FLAjZjkx2G7EMYyMjYLLs=s344",
        name : "Manage a Project with Digital Tools",
        provider:"Applied Digital Skills",
        id:8,
        modules:6,
        hours:7,
    },

    {
        imglink: "https://lh3.googleusercontent.com/bdP8daNDK8BMuukU-D29uCav99HfimBCu2Vvj2_pV66QfFgDHbw7Kbp_snsA3j4CSdHpLkZrlzR2PigXpUVr7Gt3alb9O70xvfQsGQ=s344",
        name : "Negotiate Your Salary",
        provider:"Applied Digital Skills",
        id:9,
        modules:1,
        hours:8,
    },

    {
        imglink:"https://lh3.googleusercontent.com/I_xkjeTMwHJtwBgY1nrqVRUFuOLXEEwArmcs_REHXRLQRlvgfIAg5axrb8Q219PSqCVPiHrOXH787F3vVD-T64w6pZ_PW0Bg7OZnvUQ=s344",
        name : "Build Your Online Business",
        provider:"Applied Digital Skills",
        id:10,
        modules:8,
        hours:8,
    },

    {
        imglink:"https://lh3.googleusercontent.com/MXO2-kEPkKzIyCZ1GLLH_2BF5Kq0L_uMjZz_PPRF04WyJkvCeWZvSB1eYbmWsFUKic59Crape2npLYd7Jg404n_-8jOWGsiAKYRd=s344",

        name : "Orgainisational design:Know your organisation",
        provider:"Macquarie University",
        id:11,
        modules:6,
        hours:27,
    },

    {
        imglink:"https://lh3.googleusercontent.com/GlW6N5fh_YNcZXfuhnNEqoAarbAtcCIHDq1y8PXhO5iZp7Kx5g5qBsNhoNDvmIhqx4LCfHBp56sJlkALhYViSMS65zmxpptVfGIq=s344",
        name : "Google Cloud Platform Fundamentals: Core Infrastructure",
        provider:"Google Cloud",
        id:12,
        modules:9,
        hours:11,
    },

    {
        imglink:"https://lh3.googleusercontent.com/UPLbfm-wgTtykgUR9IxPYy_08O-9q4dB4SD3FdgbLTMtaQZ8zTwtM-nD_tO5sCLvz9W7B2T4jCFQ2Si9wpRT7jGLH7up5MygzPKgfwA=s344",
        name : "Google Cloud Platform Big Data and machine Learning Fundamentals",
        provider:"Google Cloud",
        id:13,
        modules:7,
        hours:11,
    },

    {
        imglink:"https://lh3.googleusercontent.com/X04kGWG7_NFtOc5WXwqXuJ23dDKh3r0BX2SWvA7U_9cBZbRNAeD4IjL4ItUPszQumoRNU0fqUOOqfiuBz3Pmrz30O2feW9aKhNY7=s344",
        name : "Getting Started with Agile & Design thinking",
        provider:"Darden School of Business, University of Virginia",
        id:14,
        modules:4,
        hours:16,
    },

    {
        imglink:"https://lh3.googleusercontent.com/iuT1LmE-TpyU3sR1IsS6l6_C9bTn64wFxQ3WAUjLeMdKmdY8azXOUmlwz6XNwzXnzrqC4VKpXyy2Hqf4qXl0N0Pi6Tnm2FyyEx6SC88=s344",
        name : "Effective networking",
        provider:"FutureLearn",
        id:15,
        modules:1,
        hours:1,
    },

    {
        imglink:"https://lh3.googleusercontent.com/6Nq6lModCOGaAQTrA1m7QsglLdJhDFcJPek_8AZIXwL75qi6xfzahER3RY12YMd5nEX1vUgzyIuDJDqEQf_AcFspw7JFrc6B35rj6A=s344",
        name : "Marketing Analytics",
        provider:"FutureLearn",
        id:16,
        modules:4,
        hours:3,
    },

    {
        imglink:"https://lh3.googleusercontent.com/KFYVfGftNwwu0FfJwbdku7julnSbkYOmkMIbdmW6uaz3lUbRL7ft2Zza9A6Y71SByHIKSNhj18Og418aT45FiWndtXFjpEBi-iMuRw=s344",
        name : "Business communication",
        provider:"Goodwill Community Foundation",
        id:17,
        modules:1,
        hours:1,
    },

    {
        imglink:"https://lh3.googleusercontent.com/e-qCjEaBj3hfipIVi8NfyA9w-fLSMDfpXY9rDIFqSlaVZEFYkdAT1RdGx2RNZtqo7WwRMkGoVc6BxZItiHp0KeC8dzQ0lSlUTUvrWQ=s344",
        name : "Grasshopper: Learn to code",
        provider:"Grasshopper",
        id:18,
        modules:6,
        hours:11,
    },

    {
        imglink:"https://lh3.googleusercontent.com/G23dJVd7YEC8Vnowh68JgAcAUW-u_m4G5F4YlRzXOgJNf3K2EtIF_yeNKQYfJ2Qx-CwEQXyVCaASf44mX-iaVt7skaA0Luw4DH88QYNxL9m6ugaIbDs=s344",
        name : "Data Science Foundations",
        provider:"Great Learning",
        id:19,
        modules:6,
        hours:1.5,
    },

    {
        imglink:"https://lh3.googleusercontent.com/ZbHkbkFI4FM8NleFcJ17gbopI-YMqy9jx9IDUO7-MfubyK9CbUFN6fqy1fMStaWCvtFH8p-c0W-EuzOmezRiGTgMSdKqOqoyBRit=s344",
        name : "Mindfulness for Wellbeing and Peak Performance",
        provider:"Monash University",
        id:20,
        modules:4,
        hours:12,
    },

    {
        imglink:"https://lh3.googleusercontent.com/MoltPav4cZ-N5odefqC0P32RCBctYwRQCKgpwr7TBBYtYMbBepwrd1dANApPWlUlxOEzTHS2ltb3AqixSixMMhu1EBNZg-gaGL4H=s344",
        name : "Using Creative Problem Solving",
        provider:"National Chio Tung University",
        id:21,
        modules:4,
        hours:12,
    },

    {
        imglink:"https://lh3.googleusercontent.com/LzZEa0Xrc7gbrafsZQ9YUgvdxSq1u5uHcS0ZGM_eMaCsel2JYzqxCcKWObBlOAsVV2YqgSyviE0_1s_sQs-6ZjUaCv2pqZfc_EZVGk0=s344",
        name : "Communicate your ideas through storytelling and design",
        provider:"OpenClassrooms",
        id:22,
        modules:1,
        hours:1,
    },

    {
        imglink:"https://lh3.googleusercontent.com/DA7fDwtzHQMT8xbyt8FWBKY5oZuwBjPcb5iFnhG8i_R49jeobm60xVEc7Jl3W8vzz2mJolDE_o2_QKMPhj789UPLNe8iTl9NUl0n=s344",
        name : "Speaking in public",
        provider:"OpenClassrooms",
        id:23,
        modules:1,
        hours:1,
    },

    {
        imglink:"https://lh3.googleusercontent.com/v2CHY9Hleal1zbkRXPzoPAcKWflpTeT3bRL77JackDprzjwHXTG6fa-KFhj9kZRKSuP-ht0DHy99_xec1MRWDX8xMwiFcvey_QTIS3N5caL-DMJwogE=s344",
        name : "Data Science with Python",
        provider:"simplilearn",
        id:24,
        modules:13,
        hours:8,
    },

    {
        imglink:"https://lh3.googleusercontent.com/4vE71F64eVwYJLQJFLmmcybNxSMwqnpAmnMat0uawr-hTR81RoCZflAN9uheeGa-cNBu45JRLvjbudC1GVVurrgVjRFsa26ubk7D=s344",
        name : "Google Ads Display",
        provider:"Skillshop",
        id:25,
        modules:6,
        hours:2,
    },

    {
        imglink:"https://lh3.googleusercontent.com/xNFMMMz7MYjyik3Xq0buYXB9XhWMd1VoNtpkc_WyNfQJpKPEKiDO37zBalU3PD31fUKrTEdFen6NlwPIIAGgMs009Vl1a0NO9ZWyfA=s344",
        name : "Google Ads Search",
        provider:"Skillshop",
        id:26,
        modules:9,
        hours:3,
    },

    {
        imglink:"https://lh3.googleusercontent.com/DiZZ9a_cPUctLfuaJh_6rbRrcPui0DZys5gRTKK8-RnSfqc8vxC3qpEwoE3cZ-O_vvxbBfQ1LmjWqb-2B5nwPXbHbEygsvZGZUGxg5o=s344",
        name : "Improve your soft skills",
        provider:"The Open University",
        id:27,
        modules:8,
        hours:24,
    },

    {
        imglink:"https://lh3.googleusercontent.com/StFrc-H4b5VOEbRFvlYYbT7L8mO8KuZump2oROOV0lyEvAtBmfr0ARv05nhOZkEW_GoO0BbK_E51ldK20Iy2XFhcoaYH8CrJ3gnI=s344",
        name : "Intro to TensorFlow for Deep Learning",
        provider:"Udacity",
        id:28,
        modules:14,
        hours:70,
    },

    {
        imglink:"https://lh3.googleusercontent.com/9NVDR42_MdLZo21GGUGpcRtRtkmBabNLf9RyAy2tK-ENmpN5cXWZR3tnrzWp3BRsVVrg3LZrlOm7sbVkagi8m_OG6K2hIqFsalGb=s344",
        name : "Introduction to Python Programming",
        provider:"Udacity",
        id:29,
        modules:5,
        hours:25,
    },

    {
        imglink:"https://lh3.googleusercontent.com/gE419AtlstnVitwY_JhR5A9sZZ324YkEb9zDafZrLgj7nYXz7x-B8-U-kQzhRbsW6SE0AzpPlCtqKQDPljR2IHFegh2VeHDXpMOTIRY=s344",
        name : "Logical and Critical Thinking",
        provider:"Univercity of Auckland",
        id:30,
        modules:8,
        hours:32,
    },

    {
        imglink:"https://lh3.googleusercontent.com/iafxz56FyO0-v-3IB0-5NWy1qXhKlYyPam7CcyaS-Vc0YA-1CzJAD-nVm8N0nPyobZPonPvap9Lg7U-oatrYevzqnZomb_Iha9Mymw=s344",
        name : "Decision Making in a Complex and Uncertain World",
        provider:"University of Groningen",
        id:31,
        modules:7,
        hours:35,
    },

    {
        imglink:"https://lh3.googleusercontent.com/Sr3PZf6iuFBn7VWIqPzDvMAn_RMUBG8rUc0eB60sE6wdAqCdeMPWiUjnAR4-JWsHjGfy75eQqP3U0qSAbf7Tri3mfmkpa3xvtJeLS-k=s344",
        name : "Elements of AI",
        provider:"University of Helsinki and Reaktor",
        id:32,
        modules:6,
        hours:30,
    },
    
]
// filter section 

let filterData = {
    categories:["Digital Marketing", "Career development", "Data"],

    "course length":["Under 2 hours", "2-10 hours", "11-20 hours", "20+ hours"],

    certification:["Free certificate", "Paid certificate"],

    "course difficulty":["Beginner", "Intermediate", "Advanced"],

    "course provider" : ["Google", "Applied Digital Skills", "Coursera", "Darden School of Business, University of Virginia",
                        "FutureLearn", "Goodwill Community Foundation", "Google Cloud", "Grasshopper", "Great Learning", "Monash University", "National Chiao Tung University", 
                        "OpenClassrooms", "Simplilearn", "Skillshop", "The Open University", "Udacity", "University of Auckland", "University of Groningen", "University of Helsinki"]

}


for(let key in filterData){
    let keyArr = filterData[key];
    
    let box = document.createElement("div");
    box.setAttribute("class", "filters");
    document.querySelector(".course-filters").append(box);

    let title = document.createElement("h4");
    title.innerText = key;

    keyArr.forEach((e)=>{
        let div1 = document.createElement("div");
        div1.setAttribute("class", "div1");

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        
        // checkbox.addEventListener("click", checkboxFn);
        
        let label = document.createElement("p");
        label.innerText = e;

        div1.append(checkbox, label);

        title.append(div1);
        box.append(title);
    })

}


let reset_div = document.createElement("div");
reset_div.setAttribute("class", "reset_div");

let icon = document.createElement("i");
icon.setAttribute("class", "fa-solid fa-arrow-rotate-right");
reset_div.append(icon);

let span = document.createElement("span");
span.innerText = "Reset Filters";
span.style.cursor = "pointer";
span.addEventListener("click", resetFn);

icon.append(span);
document.querySelector(".course-filters").append(reset_div);

function resetFn(){
    let allCheckBox = document.querySelectorAll("input[type='checkbox']");
    allCheckBox.forEach((e)=>{
        e.checked = false;
    })
}



// course section 




let items = document.querySelector("#total-courses");
items.innerText = courseData.length;

courseDataFn(courseData);

// Data by filters 
// function checkboxFn(){

// }


function courseDataFn(courseData){
    document.querySelector(".courses>div").innerHTML = "";

    courseData.forEach((e)=>{
        let course = document.createElement("div");
        course.addEventListener("click", ()=>{
            clickfun(e);
        })
        
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
        document.querySelector(".courses>div").append(course);
    })

}


function clickfun(e){
   
    window.location.href = "about_course.html";
    localStorage.setItem("clicked-course", JSON.stringify(e));
}