import fs from 'fs';

function Icon(file) {
    return fs.readFileSync(file, { encoding:'utf-8' })
}

export const ICONS = {
    "code": Icon("./web/icons/code.svg"),
    "upright": Icon("./web/icons/upright.svg"),
    "python": Icon("./web/icons/python.svg"),
    "fastapi": Icon("./web/icons/fastapi.svg"),
    "flask": Icon("./web/icons/flask.svg"),
    "js": Icon("./web/icons/js.svg"),
    "nodejs": Icon("./web/icons/nodejs.svg"),
    "docker": Icon("./web/icons/docker.svg"),
    "git": Icon("./web/icons/git.svg"),
    "mongodb": Icon("./web/icons/mongodb.svg"),
    "sql": Icon("./web/icons/sql.svg"),
    "java": Icon("./web/icons/java.svg"),
    "linkedin": Icon("./web/icons/linkedin.svg"),
    "instagram": Icon("./web/icons/instagram.svg"),
    "github": Icon("./web/icons/github.svg"),
    "salesforce": Icon("./web/icons/salesforce.svg"),
    "email": Icon("./web/icons/email.svg"),
    "circle-check": Icon("./web/icons/circle-check.svg")
}