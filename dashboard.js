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
// running element
function updateRunningNumber(spanId, endValue, increment, includeSymbol) {
  
  var spanElement = document.getElementById(spanId);

  
  var currentValue = 0;

  // Update the number every 100 milliseconds
  var intervalId = setInterval(function () {
    
    currentValue += increment;

    // Update the content of the span with or without the symbol
    if (includeSymbol) {
      spanElement.textContent = '$' + currentValue.toLocaleString(); // Format the number with commas
    } else {
      spanElement.textContent = currentValue.toLocaleString(); // Format the number with commas
    }

    // Stop the interval when the end value is reached or exceeded
    if (currentValue >= endValue) {
      clearInterval(intervalId);
    }
  }, 1); 
}

// Call the function to start updating the running numbers
updateRunningNumber('runningNumber1', 14516, 100, true);
updateRunningNumber('runningNumber2', 34516, 200, true);
updateRunningNumber('runningNumber3', 54516, 200, false);
updateRunningNumber('runningNumber4', 34516, 200, false);

const browserData = [
  {
    "browser": "Chrome",
    "stats": {
      "count": 35300,
      "arrow": "up",
      "percentage": 12.75,
      "color": "green"
    }
  },
  {
    "browser": "Opera",
    "stats": {
      "count": 35300,
      "arrow": "down",
      "percentage": 12.75,
      "color": "red"
    }
  },
  {
    "browser": "IE",
    "stats": {
      "count": 35300,
      "arrow": "up",
      "percentage": 12.75,
      "color": "green"
    }
  },
  {
    "browser": "Firefox",
    "stats": {
      "count": 35300,
      "arrow": "up",
      "percentage": 12.75,
      "color": "green"
    }
  },
  {
    "browser": "IOS",
    "stats": {
      "count": 35300,
      "arrow": "down",
      "percentage": 12.75,
      "color": "red"
    }
  }
 
];

// Function to generate HTML for each browser
const renderBrowser = (browser) => `
  <div class="card3content">
    <div class="card3icon1">
      <p>${browser.browser}</p>
    </div>
    <div class="card3content1">
      <p>${browser.stats.count}</p>
      <i class="fa-solid fa-arrow-${browser.stats.arrow} ${browser.stats.color}"></i>
      <p class="${browser.stats.color}">${browser.stats.percentage}%</p>
    </div>
  </div>
`;

// Render browsers in the UI
const browserStatsContainer = document.querySelector('.card3flex');
browserStatsContainer.innerHTML = browserData.map(renderBrowser).join('');


const taskData = [
  {
    type: "Task finished",
    date: "29 oct 2020",
    user: "Adam berry",
    task: "Project management"
  },
  {
    type: "New comment",
    date: "25 oct 2020",
    user: "Victoria",
    task: "Angular JS template"
  },
  {
    type: "New comment",
    date: "25 oct 2020",
    user: "Adam berry",
    task: "Project management"
  },
  {
    type: "Task Overdue",
    date: "14 oct 2020",
    user: "Pretty cruiser",
    task: "Integrated management"
  },
  {
    type: "Task Overdue",
    date: "29 oct 2020",
    user: "Adam berry",
    task: "Integrated management"
  }
];

// Function to generate HTML for each task card
const renderTaskCard = (task) => `
  <div class="card4content">
    <div class="${task.type === 'New comment' ? 'card4dot1' : 'card4dot'}"></div>
    <div class="card4content1">
      <div class="card4comment">
        <h5>${task.type}</h5>
        <p class="light1">${task.date}</p>
      </div>
      <p class="light1">${task.user} ${task.type === 'New comment' ? 'commented on' : 'finished task on'} <span class="bluecolor">${task.task}</span></p>
    </div>
  </div>
`;

// Render task cards in the UI
const taskCardsContainer = document.querySelector('.card421');
taskCardsContainer.innerHTML = taskData.map(renderTaskCard).join('');

const notificationData = [
  {
    icon: "fa-solid fa-user-plus",
    user: "Mr John",
    action: "Started following you",
    date: "01 June 2020",
    time: "1min"
  },
  {
    icon: "fa-solid fa-comment",
    user: "Lily 1",
    action: "Commented applied",
    date: "01 June 2020",
    time: "3min"
  },
  {
    icon: "fa-solid fa-thumbs-up",
    user: "Kevin",
    action: "Liked your site",
    date: "01 June 2020",
    time: "5min"
  },
  {
    icon: "fa-solid fa-signs-post",
    user: "Anderna",
    action: "Posted a new article",
    date: "01 June 2020",
    time: "5min"
  },
  {
    icon: "fa-solid fa-truck",
    user: "Sonia",
    action: "Delivery in progress",
    date: "01 June 2020",
    time: "5min"
  }
];

// Function to generate HTML for each notification card
const renderNotificationCard = (notification) => `
  <div class="dashboardcontentcard2card1content${notificationData.indexOf(notification) + 1}">
    <i class="${notification.icon}"></i>
    <div class="dashboardcontentcard2card1content1flex">
      <div>
        <p><span><b>${notification.user}</b></span> ${notification.action}</p>
        <p class="light">${notification.date}</p>
      </div>
    </div>
    <div>
      <p class="dashboardcontentcard2card1content${notificationData.indexOf(notification) + 1}p">${notification.time}</p>
    </div>
  </div>
`;

// Render notification cards in the UI based on a filter
const notificationCardsContainer = document.querySelector('.dashboardcontentcard2card1content');

// Example: Display only notifications where the action contains "Comment"
// const filteredNotifications = notificationData.filter(notification => notification.action.includes("Comment"));

notificationCardsContainer.innerHTML = notificationData.map(renderNotificationCard).join('');

// const renderTrail=(trail)=>`
// <div class="trail">
// <p class="red">${trail.time}</p>
// <p>${trail.user}</p>
// </div>


// `;
// const trailcontainer=document.querySelector('.trail');
// trailcontainer.innerHTML=notificationData.map(renderTrail).join('');

// const trail=[{
//   username:"arun",
//   age:"09"
// },
// {
//   username:"rakesh",
//   age:"1"

// },
// {
//   username:"rabbit",
//   age:"10"
// }
// ]
// const renderTrail=(trail)=>`
// <p>${trail.username}</p>
// <p>${trail.age}</p`;
// const trailrender=document.querySelector('.trail')
// trailrender.innerHTML=trail.map(renderTrail).join('')
const jsonTable = [
  {
    sno: "01",
    imageSrc: "image/2-84a11ca2.jpg",
    name: "jack",
    email: "jack@gmail.com",
    date: "03/09/2020",
    amount: "879",
    status: "Success"
  },
  {
    sno: "02",
    imageSrc: "image/1-4d4d5dca.jpg",
    name: "jack",
    email: "jack@gmail.com",
    date: "03/09/2020",
    amount: "879",
    status: "Failure"
  },
  {
    sno: "03",
    imageSrc: "image/15-206057a7.jpg",
    name: "jack",
    email: "jack@gmail.com",
    date: "03/09/2020",
    amount: "879",
    status: "Pending"
  },
  {
    sno: "04",
    imageSrc: "image/2-84a11ca2.jpg",
    name: "jack",
    email: "jack@gmail.com",
    date: "03/09/2020",
    amount: "879",
    status: "Success"
  },
  {
    sno: "05",
    imageSrc: "image/1-4d4d5dca.jpg",
    name: "jack",
    email: "jack@gmail.com",
    date: "03/09/2020",
    amount: "879",
    status: "Failure"
  },
  {
    sno: "06",
    imageSrc: "image/15-206057a7.jpg",
    name: "jack",
    email: "jack@gmail.com",
    date: "03/09/2020",
    amount: "879",
    status: "Pending"
  },
  {
    sno: "07",
    imageSrc: "image/2-84a11ca2.jpg",
    name: "jack",
    email: "jack@gmail.com",
    date: "03/09/2020",
    amount: "879",
    status: "Success"
  },
  {
    sno: "08",
    imageSrc: "image/1-4d4d5dca.jpg",
    name: "jack",
    email: "jack@gmail.com",
    date: "03/09/2020",
    amount: "879",
    status: "Failure"
  },
  {
    sno: "09",
    imageSrc: "image/15-206057a7.jpg",
    name: "jack",
    email: "jack@gmail.com",
    date: "03/09/2020",
    amount: "879",
    status: "Pending"
  }
];
let renderTable=(data,index)=>`<tr>
<td><p class="tablesno">${index+1}</p></td>
<td>
  <div class="tableimage">
    <div class="timage">
      <img src="${data.imageSrc}">
    </div>
    <div class="tdata">
      <p class=tdatap>${data.name}</p>
      <p class=light1>${data.email}</p>
     
    </div>
  </div>
</td>
<td><p class="tdate">${data.date}</p></td>
<td><p class="tamount">${data.amount}</p></td>
<td><p class="${getStatusClass(data.status)}">${data.status}</p></td>
<td>
<div class=tdflex>
  <i class="fa-regular fa-pen-to-square edit-btn" onclick=edit(${index})></i>
  <i class="fa-solid fa-trash delete-btn"onclick=dele(${index})></i>
</div>
</td>
</tr>
`;
const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case 'success':
      return 'tstatus';
    case 'failure':
      return 'tstatus1';
    case 'pending':
      return 'tstatus2';
    default:
      return '';
  }
};
const tableContainer=document.getElementById('render');
// tableContainer.innerHTML=jsonTable.map(renderTable).join('');
const rowCountSelect = document.getElementById('rowCountSelect');

    const updateTable = () => {
      const selectedRowCount = parseInt(rowCountSelect.value);
      const tableRows = jsonTable.slice(0, selectedRowCount).map(renderTable).join('');
      tableContainer.innerHTML = tableRows;
    };

    rowCountSelect.addEventListener('change', updateTable);

    // Initial table render
    updateTable();
 


function dele(index){
  if(confirm("Delete this data?")){
  jsonTable.splice(index,1)
  updateTable();}

}


