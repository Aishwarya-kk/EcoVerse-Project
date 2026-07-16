/*==========================================
        EcoVerse JavaScript
==========================================*/

/*========== LOADER ==========*/

/*========== FAST LOADER ==========*/

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";
loader.style.transition="0.5s ease";

setTimeout(()=>{

loader.style.display="none";

},500);


},500);

});

/*========== HEADER ==========*/

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

header.classList.toggle("active",window.scrollY>50);

});

/*========== MOBILE MENU ==========*/

const menuToggle=document.querySelector(".menu-toggle");

const navMenu=document.querySelector(".nav-menu");

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

});

});

/*========== SCROLL PROGRESS ==========*/

const progress=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});

/*========== SCROLL TOP ==========*/

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollBtn.classList.add("show");

}else{

scrollBtn.classList.remove("show");

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*========== COUNTER ==========*/

const counters=document.querySelectorAll(".counter");

const speed=200;

const startCounter=()=>{

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target.toLocaleString();

}

};

update();

});

};

let counterStarted=false;

window.addEventListener("scroll",()=>{

const counterSection=document.querySelector(".counter-section");

const sectionTop=counterSection.offsetTop-400;

if(window.scrollY>sectionTop && !counterStarted){

counterStarted=true;

startCounter();

}

});

/*========== CUSTOM CURSOR ==========*/

const dot=document.querySelector(".cursor-dot");

const ring=document.querySelector(".cursor-ring");

window.addEventListener("mousemove",(e)=>{

dot.style.left=e.clientX+"px";

dot.style.top=e.clientY+"px";

ring.style.left=e.clientX+"px";

ring.style.top=e.clientY+"px";

});
/*==========================================
        MUSIC CONTROL
==========================================*/

/*==========================================
        MUSIC CONTROL
==========================================*/

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("natureMusic");

let isPlaying = false;

if(musicBtn && music){

musicBtn.addEventListener("click",()=>{

if(!isPlaying){

music.play();


// Sound ON icon 🎵
musicBtn.innerHTML =
'<i class="fa-solid fa-volume-high"></i>';

musicBtn.classList.add("playing");

isPlaying=true;

}

else{

music.pause();


// Sound OFF icon ❌
musicBtn.innerHTML =
'<i class="fa-solid fa-volume-xmark"></i>';

musicBtn.classList.remove("playing");

isPlaying=false;

}

});

}

/*==========================================
        PLEDGE BUTTON
==========================================*/

const pledgeBtn = document.querySelector(".pledge-btn");

if (pledgeBtn) {

    pledgeBtn.addEventListener("click", () => {

        pledgeBtn.innerHTML =
        "🌱 Thank You For Saving Earth!";

        pledgeBtn.style.background = "#00b894";

        alert(
            "Thank you for taking the Green Pledge! 🌍💚"
        );

    });

}

/*==========================================
        CONTACT FORM
==========================================*/

const contactForm =
document.querySelector(".contact-form");

if (contactForm) {

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message Sent Successfully 🌿");

contactForm.reset();

});

}

/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==========================================
        GALLERY HOVER
==========================================*/

const galleryItems =
document.querySelectorAll(".gallery-item img");

galleryItems.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.filter =
"brightness(1.1) saturate(1.2)";

});

image.addEventListener("mouseleave",()=>{

image.style.filter = "none";

});

});

/*==========================================
        WEATHER CARDS
==========================================*/

const weatherCards =
document.querySelectorAll(".weather-card");

weatherCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-15px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0px) scale(1)";

});

});

/*==========================================
        PARALLAX HERO
==========================================*/

window.addEventListener("scroll",()=>{

const value = window.scrollY;

const sun = document.querySelector(".sun");
const clouds =
document.querySelectorAll(".cloud");

if(sun){

sun.style.transform =
`translateY(${value*0.2}px)`;

}

clouds.forEach((cloud,index)=>{

cloud.style.transform =
`translateX(${value*(0.1+index*0.05)}px)`;

});

});
/*==========================================
        RANDOM LEAVES
==========================================*/

const hero = document.querySelector(".hero");

function createLeaf() {

    const leaf = document.createElement("div");

    leaf.classList.add("leaf");

    leaf.innerHTML = "🍃";

    leaf.style.left = Math.random() * 100 + "vw";

    leaf.style.animationDuration =
    (5 + Math.random() * 6) + "s";

    leaf.style.fontSize =
    (18 + Math.random() * 18) + "px";

    document.body.appendChild(leaf);

    setTimeout(() => {

        leaf.remove();

    },11000);

}

setInterval(createLeaf,700);

/*==========================================
        FIREFLIES
==========================================*/

function createFirefly(){

    const firefly=document.createElement("div");

    firefly.classList.add("firefly");

    firefly.style.left=Math.random()*100+"vw";

    firefly.style.top=Math.random()*100+"vh";

    document.body.appendChild(firefly);

    setTimeout(()=>{

        firefly.remove();

    },6000);

}

setInterval(createFirefly,1200);

/*==========================================
        STARS
==========================================*/

const stars=document.querySelector(".stars");

if(stars){

for(let i=0;i<80;i++){

const star=document.createElement("span");

star.classList.add("star");

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*5+"s";

stars.appendChild(star);

}

}

/*==========================================
        BUTTON RIPPLE
==========================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},700);

});

});

/*==========================================
        TYPING EFFECT
==========================================*/

const heading=document.querySelector(".hero-content h1");

if(heading){

const text=heading.innerText;

heading.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

heading.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

}

/*==========================================
        CURRENT YEAR
==========================================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*==========================================
        CONSOLE MESSAGE
==========================================*/

console.log(
"%c🌿 EcoVerse - Designed & Developed by Aishwarya K",
"color:#2ecc71;font-size:18px;font-weight:bold;"
);
/*==========================================
        TREE PLANTATION
==========================================*/


const plantBtn=document.getElementById("plantTreeBtn");

const seed=document.getElementById("seed");

const tree=document.getElementById("tree");

const treeCount=document.getElementById("treeCount");


if(plantBtn){


plantBtn.addEventListener("click",()=>{


seed.style.display="none";


tree.style.display="block";


let count=parseInt(treeCount.innerText);


treeCount.innerText=count+1;



plantBtn.innerHTML=
"🌳 Tree Planted Successfully";


plantBtn.style.background="#00b894";


alert(
"Congratulations! You planted a virtual tree 🌱"
);



});


}
/*==========================================
        EARTH NIGHT MODE
==========================================*/


const themeBtn=
document.getElementById("themeToggle");


if(themeBtn){


themeBtn.addEventListener("click",()=>{


document.body.classList.toggle("night");


if(document.body.classList.contains("night")){


themeBtn.innerHTML="☀️";


}

else{


themeBtn.innerHTML="🌙";


}


});


}
/*==========================================
        ECO AI CHATBOT
==========================================*/


const chatButton=document.getElementById("ecoChatBtn");

const chatBox=document.getElementById("ecoChatBox");

const closeChat=document.getElementById("closeChat");

const sendChat=document.getElementById("sendChat");

const userMessage=document.getElementById("userMessage");

const chatMessages=document.querySelector(".chat-messages");



chatButton.onclick=()=>{

chatBox.style.display="flex";

};



closeChat.onclick=()=>{

chatBox.style.display="none";

};



sendChat.onclick=()=>{


let text=userMessage.value.trim();


if(text==="") return;



let user=document.createElement("div");

user.className="user-msg";

user.innerHTML=text;


chatMessages.appendChild(user);



let reply="";


if(text.toLowerCase().includes("tree")){

reply="Trees give oxygen and help control climate change 🌳";

}

else if(text.toLowerCase().includes("water")){

reply="Save water because every drop matters 💧";

}

else if(text.toLowerCase().includes("pollution")){

reply="Reduce plastic use and choose eco-friendly solutions 🌍";

}

else{

reply="Thank you for protecting our planet 🌱";

}



setTimeout(()=>{


let bot=document.createElement("div");

bot.className="bot-msg";

bot.innerHTML=reply;


chatMessages.appendChild(bot);


chatMessages.scrollTop=
chatMessages.scrollHeight;


},600);



userMessage.value="";


};
/*==========================================
      SCROLL IMAGE ANIMATION
==========================================*/


const revealImages = document.querySelectorAll(
".reveal-img,.reveal-left,.reveal-right"
);



const imageObserver = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("active");


}

});


},
{
threshold:0.25
}
);



revealImages.forEach(img=>{

imageObserver.observe(img);

});
/*==========================================
        EARTH INFORMATION
==========================================*/


const earthData={


amazon:{


title:"🌳 Amazon Forest",

text:
"The Amazon is the largest rainforest on Earth. Protecting it helps control climate change and supports millions of species."


},


ocean:{


title:"🌊 Ocean Protection",

text:
"Oceans regulate Earth's climate. Reduce plastic pollution and protect marine life."


},


arctic:{


title:"❄️ Arctic Region",

text:
"Climate change is melting Arctic ice. Reducing carbon emissions can help protect this ecosystem."


},


wildlife:{


title:"🦁 Wildlife Protection",

text:
"Thousands of species are endangered due to habitat loss. Conservation helps protect biodiversity."


}


};



function showEarthInfo(type){


const popup=document.getElementById("earthPopup");


popup.querySelector("h2").innerHTML=
earthData[type].title;


popup.querySelector("p").innerHTML=
earthData[type].text;


popup.classList.add("active");


}



function closeEarthInfo(){


document
.getElementById("earthPopup")
.classList.remove("active");


}
/*==========================================
        MUSIC CONTROL FIX
==========================================*/

/*==========================================
        END OF SCRIPT
==========================================*/