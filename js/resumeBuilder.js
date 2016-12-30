
var bio = {
  "name": "Elias Roman",
  "role": "Front-End Web Developer",
  "welcomeMessage": "Hello, this is my resume.",
  "contacts": {
    "email": "elias.roman2565@gmail.com",
    "mobile": "570-452-1873",
    "github": "eliasroman2565",
    "twitter": "@roman2565",
    "location" : "Allentown, PA"},
  "skills": ["HTML", "CSS", "JavaScript", "Microsoft Office"],
  "bioPic" : "images/fry.jpg"
};

var education = {
  "schools" : [{

      "name": "Penn College",
      "location": "Williamsport, PA",
      "degree": "Not Complete",
      "major": "Civil Engineering",
      "dates" : "2013-2015"
    },{
      "name" : "Bloomsburg University",
      "location" : "Bloomsburg, PA",
      "degree": "Not Complete",
      "major" : "Pre-Physical Therapy",
      "dates" : "2012-2013"
    }],

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
    "images" : [
      "images/197x148.gif",
     "images/197x148.gif"]
  }, {
    "title" : "Resume",
    "dates" : "October, 2016 - December, 2016",
    "description" : "I created a webpage utilizing HTML/CSS and JavaScript which displayed my work history, contact information, educational history, etc.",
    "images" : [
      "images/197x148.gif",
    "images/197x148.gif"]
  }]
};

function displayHeader(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);

  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

  var formattedNameRole = formattedName + formattedRole;
    $("#header").prepend(formattedNameRole);

  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formattedEmail);

  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formattedGithub);

  var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedLocation);

  var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedbioPic);

  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);
}

displayHeader();


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
}

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);

  }
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
        }
      }
  }
};

projects.display();

function displayEducation(){
  for (school in education.schools){
    $("#education").append(HTMLschoolStart);

  var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedName);

  var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedMajor);

      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);


  }
}

displayEducation();

function displayFootercontacts() {
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#footerContacts").append(formattedEmail);

  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#footerContacts").append(formattedGithub);

  var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    $("#footerContacts").append(formattedTwitter);

  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#footerContacts").append(formattedLocation);
}

displayFootercontacts();

$("#mapDiv").append(googleMap);
