import code from "../icons/code.svg?raw";
import { applyMarks } from "./general";


function convertDate(dateStr) {
    const date = new Date(dateStr);

    const options = { year: 'numeric', month: 'long' };

    return date.toLocaleDateString('es-ES', options);
}


export function jobCard(parent, job) {

    const startDate = convertDate(job.start);
    const endDate = convertDate(job.end);

    const activities = job.activities.map(activity => {
        return /*html*/`
        <li class="flex mb-3">
          <i svg="" class="mt-[0.2em] mr-3 text-aqua-self">
            ${code}
          </i>
          <div class="marked">
            ${applyMarks(activity, job.marks)}
          </div>
        </li>`;
    });

    const template = /*html*/`
    <div class="bg-black bg-opacity-25 p-8 text-2xl gap-3 flex flex-col rounded-2xl">
          <h3 class="font-bold text-3xl">${job.company}</h3>
          <span class="text-aqua-self">${job.role}</span>
          <span>${startDate} - ${endDate}</span>
          <ul>
            ${activities.join('')}
          </ul>
        </div>`
    
    parent.insertAdjacentHTML('beforeend', template);
}