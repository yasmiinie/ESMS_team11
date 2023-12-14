
// Add this code after your existing JavaScript code

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav_link a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('.navBarWrapper').offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });
});







function playVideo() {
  var video = document.getElementById('myVideo');
  var playButton = document.querySelector('.playButton');

  video.controls = true; // Enable controls after clicking the custom play button
  video.style.display = 'block';
  playButton.style.display = 'none';

  video.play();
}









const getElement = (selector) => {
    const element = document.querySelector(selector)
   
    if (element) return element
    throw Error(
      `Please double check your class names, there is no ${selector} class`
    )
  }

const MenuHamburger = getElement('.space-y-2');
const nav_links = getElement('.nav_links');

MenuHamburger.addEventListener('click',()=>{
  
  if(nav_links.style.height=="0px"){
    nav_links.style.height="fit-content"
  }else{
    nav_links.style.height="0px"
  }
  })

const answer = document.querySelectorAll('.answer');
const showAnswer = document.querySelectorAll('.showAnswer');

showAnswer.forEach((element, index) => {
  element.addEventListener('click', () => {
    // Assuming "height" is a variable or a property of the elements
    // and "answer" is an array of elements
    const height = answer[index].style.height || "0";

    if (height === "0px") {
      answer[index].style.height = 'fit-content';
    } else {
      answer[index].style.height = '0px';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".buttons-area button");
  const contentElements = document.querySelector(".boxAgenda .text-content");
  const activityElement = document.querySelector(".activitis .activity p");

  // Content data for each week
  const weeksData = [
    {
      activity: "Launch and team formation",
      date: ["Saturday (Opening Ceremony): 17/12/2023"],
      schedule: [
      ". 8:00  - 11:30 : Welcome and event and overview.\n. 11.30  - 12:30 lunch break \n. 13:00 - 14:00 announcing the first challenge",
      ],
    },
    {
      activity: "Workshops and Skill-Building",
      date: ["Saturday (Workshop): 24/12/2023:"],
      schedule: [
        ". 8:30  - 12:30 : UI/UX Design Principles\n. 14:00  - 15:00 :  Announcing the 2nd challenge",
      ],
    },
    {
      activity: "Preliminary Challenges",
      date: ["Saturday: 31/12/2023"],
      schedule: [
        ". 10:30  - 12:30 : Web Development Basics: Learn HTML, CSS, and JavaScript \n. 12:30  - 14:00 : Lunch break and strategy discussions. \n. 14:00  - 15:00 : Announcing the 3rd challenge",
      ],
    },
    {
      activity: "Intensive Challenges and Learning",
      date: ["Saturday : 06/01/2024"],
      schedule: [
        ". 9:30  - 12:30 : Coding Essentials workshop \n. 12:30  - 14:00 : Lunch break \n. 15:00  - 16:00 : Announcing the 4th challenge.",
      ],
    },
    {
      activity: "Grand Finale and Digital Crown",
      date: ["Saturday 19/01/2024:"],
      schedule: [
        ". 14:00  - 15:00 : Closing ceremony with the announcement of the winners.\n. 15:00  - 17:00 : Digital Crown Ceremony, where the winning team is declared the owner of the empire, symbolized by receiving the digital crown",
      ],
    },
    // Add similar data for other weeks...
  ];

  function updateContent(index) {
    const weekData = weeksData[index];

    // Update activity
    activityElement.textContent = weekData.activity;

    // Clear previous content
    contentElements.innerHTML = "";

    weekData.date.forEach((date, i) => {
      const dateElement = document.createElement("span");
      dateElement.classList.add(i === 0 ? "date" : "date second");
      dateElement.textContent = date;
      contentElements.appendChild(dateElement);

      const scheduleElement = document.createElement("div");
      scheduleElement.classList.add(i === 0 ? "schedule" : "schedule second");
      const scheduleLines = weekData.schedule[i].split("\n");

      // Handle each part of the schedule separately
      scheduleLines.forEach((line) => {
        const lineElement = document.createElement("div");
        lineElement.textContent = line;
        scheduleElement.appendChild(lineElement);
      });

      contentElements.appendChild(scheduleElement);
    });
  }

  // Add click event listeners to each button
  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      updateContent(index);
    });
  });
});



  document.addEventListener('DOMContentLoaded', function () {
  var navBar = document.querySelector('.navBarWrapper');
  var navBarOffset = navBar.offsetTop;

  function onScroll() {
    if (window.pageYOffset >= navBarOffset) {
      navBar.classList.add('fixed');
    } else {
      navBar.classList.remove('fixed');
    }
  }

  // Listen for the scroll event and call the onScroll function
  window.addEventListener('scroll', onScroll);
});


 