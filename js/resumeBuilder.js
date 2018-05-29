/*
This is empty on purpose! Your code to build the resume will go here.
 */

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
}

var work = {
    "jobs": [
        {
            "employer": "UCLA Extension",
            "title" = "Front-End Programmer",
            "dates" = "March 2017 - present",
            "description" = "lorem ipsum"
        },
        {
            "employer": "USC Center for Effective Organiations",
            "title" = "Webmaster",
            "dates" = "November 2012 - March 2017",
            "description" = "lorem ipsum"
        }
    ]
}

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
                "/images/pic.png",
                "/images/pic.png"
            ]
        }
    ]
}

$("#main").append(work["position"]);
$("#main").append(education.name);