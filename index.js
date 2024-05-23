import { jobCard } from "./components/jobCard";
import { projectCard } from "./components/proyectCard";
import { abilityCard } from "./components/abilityCard";
import { techCard } from "./components/techStackCard";
import { loadIcons } from "./icons";
import { getData } from "./information";


const experiencePanel = document.querySelector('#experience-panel');
const projectsPanel = document.querySelector('#projects-panel');
const abilitiesPanel = document.querySelector('#abilities-panel');
const techStackPanel = document.querySelector('#tech-stack-panel');


getData().then(data => {
    data.experience.forEach(job => jobCard(experiencePanel, job));
    data.projects.forEach(project => projectCard(projectsPanel, project));
    data.abilities.forEach(ability => abilityCard(abilitiesPanel, ability));
    data.techStack.forEach(tech => techCard(techStackPanel, tech));
});


loadIcons();


