var bio = {
    "name": "Elias Roman",
    "role": "Front-End Web Developer",
    "welcomeMessage": "Hello, this is my resume.",
    "contacts": {
        "email": "elias.roman2565@gmail.com",
        "mobile": "570-452-1873",
        "github": "eliasroman2565",
        "twitter": "@roman2565",
        "location": "Allentown, PA"
    },
    "skills": ["HTML", "CSS", "JavaScript", "Microsoft Office"],
    "biopic": "images/fry.jpg"
};

var work = {
    "jobs": [{
        "employer": "Horgan Brothers Inc.",
        "title": "Drafting Technician",
        "location": "Harleysville, PA",
        "dates": "October, 2016 - Present",
        "description": "Digitize contours to perform accurate takeoff of earthwork and materials needed to complete the project."
    }, {
        "employer": "Wagman Heavy Civil",
        "title": "Surveyor",
        "location": "Allentown, PA",
        "dates": "January, 2016 - October, 2016",
        "description": "Performed construction stake-out for structures, superstructures, footers, etc. Performed topographic surveys which allowed for accurate takeoff of quantities for payment by owner. Performed as-built surveys of pipes and structures for future referece."
    }]
};

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "September, 2016 - October, 2016",
        "description": "I created a static HTML/CSS webpage which displayed web development projects that I have worked on.",
        "images": ["images/197x148.gif", "images/350x150.png"]
    }, {
        "title": "Resume",
        "dates": "October, 2016 - December, 2016",
        "description": "I created a webpage utilizing HTML/CSS and JavaScript which displayed my work history, contact information, educational history, etc.",
        "images": ["images/197x148.gif", "images/350x150.png"]
    }]
};

var education = {
    "schools": [{

        "name": "Penn College",
        "location": "Williamsport, PA",
        "degree": "Not Complete",
        "majors": ["Civil Engineering", " Nursing"],
        "dates": "2013-2015",
        "url": "www.pct.edu"
    }, {
        "name": "Bloomsburg University",
        "location": "Bloomsburg, PA",
        "degree": "Not Complete",
        "majors": ["Pre-Physical Therapy", " Biology"],
        "dates": "2012-2013",
        "url": "www.bloomu.edu"
    }],

    "onlineCourses": [{

        "school": "Udacity",
        "title": "Front-End Web Developer",
        "dates": "September, 2016 - Present",
        "url": "www.Udacity.com"
    }, {
        "school": "Codecademy",
        "title": "Front-End Web Development",
        "dates": "April, 2016 - May, 2016",
        "url": "www.Codecademy.com"
    }]

};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedNameRole = formattedName + formattedRole;
    $("#header").prepend(formattedNameRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedTwitter)
        .append(formattedLocation);

    var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbiopic);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {

            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });

        $("#footerContacts").append(formattedMobile)
            .append(formattedEmail)
            .append(formattedGithub)
            .append(formattedTwitter)
            .append(formattedLocation);
    }
};

bio.display();

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);

    });
};
work.display();

projects.display = function() {


    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);
        project.images.forEach(function(img) {
            if (project.images.length > 0) {
                var formattedImage = HTMLprojectImage.replace("%data%", img);
                $(".project-entry:last").append(formattedImage);
            }
        });
    });
};

projects.display();

education.display = function() {

    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);

        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedName + formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajor);

        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);


    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);

        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedonlineURL);
    });
};

education.display();

$("#mapDiv").append(googleMap);
