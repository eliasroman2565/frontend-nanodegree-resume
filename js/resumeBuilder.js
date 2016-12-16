
var bio = {
  "name": "Elias Roman",
  "Role": "Front-End Web Developer",
  "welcomeMessage": "Hello, this is my resume.",
  "contacts": ["Email: elias.roman2565@gmail.com", "Mobile: 570-452-1873", "GitHub: eliasroman2565", "Location: Allentown, PA"],
  "skills": ["HTML", "CSS", "JavaScript", "Microsoft Office"],
};

var education = {
  "Schools" : {

      "name": "Penn College",
      "location": "Williamsport, PA",
      "degree": "Not Complete",
      "major": "Civil Engineering"
    },

  "onlineCourses" : {

      "name": "Udacity",
      "course": "Front-End Web Developer"
    }

};

var work = {
  "jobs": [{
      "employer": "Horgan Brothers Inc.",
      "title": "Drafting Technician",
      "location" : "Harleysville, PA",
      "dates": "October, 2016 - Present",
      "description": "Digitize contours to perform accurate takeoff of earthwork and materials needed to complete the project."
    }, {
      "employer": "Wagman Heavy Civil",
      "title": "Surveyor",
      "location" : "Allentown, PA",
      "dates": "January, 2016 - October, 2016",
      "description": "Performed construction stake-out for structures, superstructures, footers, etc. Performed topographic surveys which allowed for accurate takeoff of quantities for payment by owner. Performed as-built surveys of pipes and structures for future referece."
    }]
};

var projects = {
  "projects" : [{
    "title" : "Portfolio",
    "dates" : "September, 2016 - October, 2016",
    "description" : "I created a static HTML/CSS webpage which displayed web development projects that I have worked on.",
    "images" : "http://www.illuminessensce.com/wp-content/uploads/2012/12/Image-Coming-Soon-Placeholder.png"
  }, {
    "title" : "Resume",
    "dates" : "October, 2016 - December, 2016",
    "description" : "I created a webpage utilizing HTML/CSS and JavaScript which displayed my work history, contact information, educational history, etc.",
    "images" : "http://www.illuminessensce.com/wp-content/uploads/2012/12/Image-Coming-Soon-Placeholder.png"
  }]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
};

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
      $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);

  };
}
displayWork();

projects.display = function() {
  for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        };
      };
  };
};
projects.display();
$("#mapDiv").append(googleMap);
