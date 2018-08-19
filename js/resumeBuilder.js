
var name = "Carrie Knowlton";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name" : "Carrie",
    "role" : "Web Developer",
    "contacts": {
        "mobile": "901-216-0012",
        "email": "carriedgibson@gmail.com",
        "location": "Los Angeles"
    },
    "picture URL" : "/images/pic.png",
    "welcome message" : "Welcome!",
    "skills" : ["javascript", "other things"]
};

var work = {
    "jobs": [
        {
            "employer": "UCLA Extension",
            "title": "Front-End Programmer",
            "location": "Los Angeles, CA",
            "dates": "March 2017 - present",
            "description": "lorem ipsum"
        },
        {
            "employer": "USC Center for Effective Organiations",
            "title": "Webmaster",
            "location": "Los Angeles, CA",
            "dates": "November 2012 - March 2017",
            "description": "lorem ipsum"
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
            "city": "Memphis, TN, US",
            "degree": "BA",
            "major": "Anthropology",
            "gradYear": 2001
        },
        {
            "name": "The University of Memphis",
            "city": "Memphis, TN, US",
            "degree": "Masters",
            "major": "Anthropology",
            "gradYear": 2010
        },
        {
            "name": "Santa Monica College",
            "city": "Santa Monica, CA, US",
            "degree": "Certificate",
            "major": "Website Creator",
            "gradYear": 2015
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2017",
            "description": "lorem ipsum",
            "images": [
                "/images/197x148.gif",
                "/images/197x148.gif"
            ]
        }
    ]
};

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
}
$("#main").append(work["position"]);
$("#main").append(education.schools);

function displayWork() {
    for (job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedAll = formattedEmployer + formattedTitle + formattedDates + formattedDescription;

        $(".work-entry:last").append(formattedAll);
    }
}
displayWork();

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