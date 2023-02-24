import inquirer from "inquirer";
import fs from "fs";

inquirer.prompt(

    [
        {
            type: "input",
            name: "title",
            message: "what is the title of the project?",
        },
        {
            type: "input",
            name: "description",
            message: "please write a brief description.",
        },
        {
            type: "input",
            name: "Installation",
            message: "how do you install your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "how is your project used?",
        },
        {
            type: "checkbox",
            name: "license",
            message: "which of these license is applicable to your repo?",
            choices: ["APACHE", "TOMCAST", "MIDDLEWARE","MIT","NONE"]
        },
        {
            type: "input",
            name: "contributor",
            message: "please list contributors?",
        },
        {
            type: "input",
            name: "test",
            message: "require test? please provide a walkthrough for tests.",
        },
        {
            type:"input",
            name:"github",
            message:"what is your github user name?",
        },
        {
            type:"input",
            name:"email",
            message:"what is your email address?",
        },
    ]);