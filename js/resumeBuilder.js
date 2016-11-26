
//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
var bio = {
  "name" : "Elias David Roman",
  "Role" : "Front-End Web Developer",
  "welcomeMessage" : "Hello, this is my resume.",
  "contacts" : ["Email: elias.roman2565@gmail.com", "Mobile: 570-452-1873", "GitHub: eliasroman2565", "Location: Allentown, PA"],
  "skills" : ["HTML", "CSS", "JavaScript", "Microsoft Office"],
  ""
};

var education = {
  "Schools" : {

      "Name" : "Penn College",
      "City" : "Williamsport, PA",
      "Degree" : "Not Complete",
      "Major" : "Civil Engineering"
    },

  "onlineCourses" : {

      "Name" : "Udacity",
      "Course" : "Front-End Web Developer"
    }

};

var work = {
  "work" : [
    {
      "Company" : "Horgan Brothers Inc.",
      "Title" : "Drafting Technician",
      "Location" : "Harleysville, PA",
      "Dates" : "October, 2016 - Present"
    },
    {
      "Company" : "Wagman Heavy Civil",
      "Title" : "Surveyor",
      "Location" : "Allentown, PA",
      "Dates" : "January, 2016 - October, 2016"
    }
  ]
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
