import { applyMarks, linkButton } from "./general";


export function projectCard(parent, project) {
    const template = /*html*/`
    <div class="bg-black bg-opacity-25 p-8 text-2xl gap-3 flex flex-col rounded-2xl h-[100%]">
        <h2 class="font-bold text-3xl">${project.name}</h2>
        <p class="marked">
            ${applyMarks(project.description, project.marks)}
        </p>
        <div class="flex gap-3 mt-auto">
        ${
            project.links.map(link => {
                return linkButton(link);
            }).join('')
        }
        </div> 
    </div>
    `;
    parent.insertAdjacentHTML('beforeend', template);
}