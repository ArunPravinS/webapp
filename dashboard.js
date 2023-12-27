const btn = document.getElementById("compress");

btn.addEventListener('click', function () {
  if (document.fullscreenElement) {
    // If already in fullscreen, exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  } else {
    // If not in fullscreen, request fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  }
});
// sets display none when clicked outside
document.addEventListener('click', function (event) {
  if (!event.target.closest('.fa-bell') && !event.target.closest('.notificationinner')) {
    notificationinner.style.display = 'none';
  }

  if (!event.target.closest('.fa-envelope-open') && !event.target.closest('.navmessageinner')) {
    navmessageinner.style.display = 'none';
  }

  if (!event.target.closest('.rightmainnavimg') && !event.target.closest('.navprofileinner')) {
    navprofileinner.style.display = 'none';
  }
  if (!event.target.closest('.notificationri') && !event.target.closest('.rightnotification')) {
    rightnotification.style.display = 'none';
  }
  if (!event.target.closest('.fa-bars-staggered') && !event.target.closest('.drawer')) {
    drawer.style.width="30px"
    for(i=0;i<hidden.length;i++){
      hidden[i].style.display="none"}
      
  }
});
// set display none
let notificationinner = document.querySelector(".notificationinner")
let bell = document.querySelector(".fa-bell")
bell.addEventListener('click', function (event) {

  notificationinner.style.display = (notificationinner.style.display == "block") ? "none" : "block"
  navmessageinner.style.display = "none"
  navprofileinner.style.display = "none"
  rightnotification.style.display="none"
  event.stopPropagation()
})
let navmessageinner = document.querySelector(".navmessageinner")
let message = document.querySelector(".fa-envelope-open")
message.addEventListener('click', function (event) {
  navmessageinner.style.display = (navmessageinner.style.display == "block") ? "none" : "block"
  notificationinner.style.display = "none"
  navprofileinner.style.display = "none"
  rightnotification.style.display="none"
  event.stopPropagation()

})
let navprofileinner = document.querySelector(".navprofileinner")
let profile = document.querySelector(".rightmainnavimg")
profile.addEventListener('click', function (event) {
  navprofileinner.style.display = (navprofileinner.style.display == "block") ? "none" : "block"
  notificationinner.style.display = "none"
  navmessageinner.style.display = "none"
  rightnotification.style.display="none"
  event.stopPropagation()

})
let notificationri = document.querySelector(".notificationri")
let rightnotification=document.querySelector(".rightnotification")
notificationri.addEventListener('click',function(event){
  rightnotification.style.display="block"
  notificationinner.style.display = "none"
  navmessageinner.style.display = "none"
  navprofileinner.style.display = "none"
  event.stopPropagation()
  
})
let close=document.querySelector(".fa-xmark")
close.addEventListener('click',function(event){
  rightnotification.style.display="none"
  event.stopPropagation()

})
let mainnavbutton=document.querySelector(".fa-bars-staggered")
let drawer=document.querySelector(".drawer")
let dashboard=document.querySelector(".dashboard")
let hidden=document.getElementsByClassName("hidden")
// mainnavbutton.addEventListener('click',function(event){
//   // drawer.style.width=(drawer.style.width=="30px")?"200px":"30px"
//   for(i=0;i<hidden.length;i++){
//   hidden[i].style.display="block"}
//   drawer.style.width=(drawer.style.width=="30px")?"200px":"30px"
//   event.stopPropagation()
//   // dashboard.style.marginLeft=(dashboard.style.marginLeft=="40px")?"200px":"40px"
// })
mainnavbutton.addEventListener('click', function(event) {
  // drawer.style.width=(drawer.style.width=="30px")?"200px":"30px"
  for (var i = 0; i < hidden.length; i++) {
    hidden[i].style.display = "block";
  }
  drawer.style.width = "200px"
  event.stopPropagation();
});

