
var bio = {
  "name": "Elias David Roman",
  "Role": "Front-End Web Developer",
  "welcomeMessage": "Hello, this is my resume.",
  "contacts": ["Email: elias.roman2565@gmail.com", "Mobile: 570-452-1873", "GitHub: eliasroman2565", "Location: Allentown, PA"],
  "skills": ["HTML", "CSS", "JavaScript", "Microsoft Office"]
};

var education = {
  "Schools" : {

      "Name": "Penn College",
      "City": "Williamsport, PA",
      "Degree": "Not Complete",
      "Major": "Civil Engineering"
    },

  "onlineCourses" : {

      "Name": "Udacity",
      "Course": "Front-End Web Developer"
    }

};

var work = {
  "jobs": [{
      "employer": "Horgan Brothers Inc.",
      "title": "Drafting Technician",
      "dates": "October, 2016 - Present",
      "description": "Digitize contours to perform accurate takeoff of earthwork and materials needed to complete the project."
    }, {
      "employer": "Wagman Heavy Civil",
      "title": "Surveyor",
      "dates": "January, 2016 - October, 2016",
      "description": "Performed construction stake-out for structures, superstructures, footers, etc. Performed topographic surveys which allowed for accurate takeoff of quantities for payment by owner. Performed as-built surveys of pipes and structures for future referece."
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

};
