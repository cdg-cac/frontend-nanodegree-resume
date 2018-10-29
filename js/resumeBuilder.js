var bio = {
    "name" : "Carrie Knowlton",
    "role" : "Web Developer",
    "contacts": {
        "mobile": "901-216-0012",
        "email": "<a href='mailto:carriedgibson@gmail.com'>carriedgibson@gmail.com</a>",
        "location": "Los Angeles, CA"
    },
    "picture URL" : "images/gibson.jpg",
    "welcome message" : "Thank you for taking the time to consider my skills and experience!",
    "skills" : ["HTML", "CSS/Sass", "JavaScript/jQuery", "Bootstrap", "Git", "Developer Tools", "WordPress", "Drupal"]
};

var work = {
    "jobs": [
        {
            "employer": "UCLA Extension",
            "title": "Front-End Programmer",
            "location": "Los Angeles, CA",
            "dates": "March 2017 - present",
            "description": "Manage front-end of enterprise website (https://uclaextension.edu) utilizing Drupal 8, JavaServer Pages, web services, HTML, CSS, JavaScript, Python, Bootstrap, AngularJS, Node.js, jQuery, fullpage.js, toastr.js, (various other JavaScript libraries). Manage department subsites utilizing WordPress including some custom theming. Isolate coding issues and provide solutions. Research/implement new ways to solve problems. Learn new technology as needed. Work with Marketing staff and academic departments"
        },
        {
            "employer": "USC Center for Effective Organizations",
            "title": "Webmaster",
            "location": "Los Angeles, CA",
            "dates": "November 2012 - March 2017",
            "description": "Serve as the Center’s Webmaster: Manage and create multiple websites hardcoded and on WordPress; Manage all web projects; Propose web solutions; Technical host to Center’s webinar series; Write, design, publish/post website content. Manage Center Marketing Communications: Develop and expand the Center’s online presence and public exposure in academia and the business management field by implementing improvements to the Center’s website; Responsible for Center’s strategic plan and execution of social media and digital marketing including mass emails; Manage Center webinars by utilizing Webex, recording the webinars, and editing / hosting videos on YouTube to post on website"
        }
    ]
};

function locationizer(work_obj) {
    var locationArray = [];

    for(job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;

}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

var education = {
    "schools": [
        {
            "name": "The University of Memphis",
            "city": "Memphis, TN",
            "degree": "BA",
            "major": "Anthropology",
            "gradYear": 2001
        },
        {
            "name": "The University of Memphis",
            "city": "Memphis, TN",
            "degree": "Masters",
            "major": "Anthropology",
            "gradYear": 2010
        },
        {
            "name": "Santa Monica College",
            "city": "Santa Monica, CA",
            "degree": "Certificate",
            "major": "Website Creator",
            "gradYear": 2015
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "UCLA Extension Timeline",
            "dates": "2017",
            "description": "Timeline built with fullpage.js library.",
            "images": [
                "images/projOne1.png",
                "images/projOne2.png"
            ]
        }
    ]
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio["welcome message"]);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedWelcome);
}
bio.display();

function displayContacts() {
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts, #footerContacts").append(formattedEmail, formattedMobile, formattedLocation);
};
displayContacts();

if (bio["picture URL"].length > 0) {
    var image = HTMLbioPic.replace("%data%", bio["picture URL"]);
    $("#header").append(image);
}

$("#header").append(HTMLskillsStart);

skills.display = function () {
    for (skill = 0; skill < bio.skills.length; skill++) {
        
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}
skills.display();

work.display = function () {
    for (job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedAll = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

        $(".work-entry:last").append(formattedAll);
    }
}
work.display();

education.display = function () {
    for (edu = 0; edu < education.schools.length; edu++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var formattedYear = HTMLschoolDates.replace("%data%", education.schools[edu].gradYear);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].city);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
        var formattedAll = formattedName + formattedDegree + formattedYear + formattedLocation + formattedMajor;

        $(".education-entry:last").append(formattedAll);
    }
}
education.display();

projects.display = function() {
    for(project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if(projects.projects[project].images.length > 0) {
            for(image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
projects.display();

$("#mapDiv").append(googleMap);