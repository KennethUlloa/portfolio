import sqlIcon from "./icons/sql.svg?raw";
import instagramIcon from "./icons/instagram.svg?raw";
import linkedinIcon from "./icons/linkedin.svg?raw";
import githubIcon from "./icons/github.svg?raw";
import code from "./icons/code.svg?raw";
import upright from "./icons/upright.svg?raw";
import python from "./icons/python.svg?raw";
import fastapi from "./icons/fastapi.svg?raw";
import flask from "./icons/flask.svg?raw";
import js from "./icons/js.svg?raw";
import nodejs from "./icons/nodejs.svg?raw";
import docker from "./icons/docker.svg?raw";
import git from "./icons/git.svg?raw";
import mongodb from "./icons/mongodb.svg?raw";
import java from "./icons/java.svg?raw";


const icons = {
    sql: sqlIcon,
    instagram: instagramIcon,
    linkedin: linkedinIcon,
    github: githubIcon,
    code: code,
    upright: upright,
    python: python,
    flask: flask,
    fastapi: fastapi,
    nodejs: nodejs,
    git: git,
    docker: docker,
    mongodb: mongodb,
    js: js,
    java: java
};

export default icons;

export function loadIcons() {
    const elements = document.querySelectorAll('[svg]');
    elements.forEach(element => {
        const icon = icons[element.getAttribute('svg')];
        if (icon) {
            element.innerHTML = icon;
            return;
        }  
    });
}