import python from "./icons/python.svg?raw";
import fastapi from "./icons/fastapi.svg?raw";
import flask from "./icons/flask.svg?raw";
import js from "./icons/js.svg?raw";
import nodejs from "./icons/nodejs.svg?raw";
import docker from "./icons/docker.svg?raw";
import git from "./icons/git.svg?raw";
import mongodb from "./icons/mongodb.svg?raw";
import sql from "./icons/sql.svg?raw";
import java from "./icons/java.svg?raw";


const data = {
    experience: [
        {
            company: "SLB",
            role: "Pasante",
            start: "2023-07",
            end: "2023-12",
            activities: [
                "Desarrollo de flujos en Power Automate para el procesamiento de archivos.",
                "Desarrollo de una aplicación desktop para el procesamiento de archivos PDF con Python."
            ],
            marks: [
                "Power Automate", "Python", "aplicación desktop"
            ]
        }
    ],
    projects: [
        {
            name: "Dependify",
            description: "Librería de Python que automatiza la inyección de dependencias a través de funciones y decoradores para el registro y posterior inyección.",
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/KennethUlloa/dependify"
                },
                {
                    name: "PyPi",
                    url: "https://pypi.org/project/dependify/"
                }
            ],
            marks: [
                "Python"
            ]
        },
        {
            name: "Carbonpage",
            description: "Librería de Python para la creación y manejo de la estructura de un proyecto de manera automática con el fin de reducir el tiempo utilizado con el código “boilerplate”. Soporta diferentes motores de plantillas como Jinja2.",
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/KennethUlloa/carbonpage"
                }
            ],
            marks: [
                "Python", "Jinja2"
            ]
        }
    ],
    abilities: [
        {
            name: "Diseño UI",
            percent: 0.7
        },
        {
            name: "Front-end",
            percent: 0.5
        },
        {
            name: "Arquitectura de software",
            percent: 0.6
        },
        {
            name: "Back-end",
            percent: 0.8
        },
        {
            name: "Dominio del inglés",
            percent: 0.9
        },
        {
            name: "Aprendizaje autodidacta",
            percent: 0.9
        },
        {
            name: "Trabajo en equipo",
            percent: 0.6
        },
        {
            name: "Comunicación",
            percent: 0.8
        },
        {
            name: "Resolución de problemas",
            percent: 0.9
        },
        {
            name: "Creatividad",
            percent: 0.9
        }
    ],
    techStack: [
        {
            name: "Python",
            image: python
        },
        {
            name: "FastAPI",
            image: fastapi
        },
        {
            name: "Flask",
            image: flask
        },
        {
            name: "JavaScript",
            image: js
        },
        {
            name: "Node.js",
            image: nodejs
        },
        {
            name: "Docker",
            image: docker
        },
        {
            name: "Git",
            image: git
        },
        {
            name: "MongoDB",
            image: mongodb
        },
        {
            name: "SQL",
            image: sql
        },
        {
            name: "Java",
            image: java
        }
    ]
}

async function getData() {
    return data;
}

export { getData };