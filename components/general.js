import upRight from "../icons/upright.svg?raw";

export function applyMarks(activity, marks) {
    marks.forEach(mark => {
        activity = activity.replace(mark, `<span>${mark}</span>`)
    });
    return activity;
}

export function linkButton(link, parent = undefined) {
    const template = /*html*/`
    <a target="_blank" href="${link.url}" class="border rounded-md w-fit border-aqua-self p-2 flex gap-3 text-lg items-center text-aqua-self">${link.name}
    <i svg="" class="text-aqua-self align-middle">
        ${upRight}    
    </i></a>
    `;

    if (parent) {
        parent.insertAdjacentHTML('beforeend', template);
        return parent.lastElementChild;
    } else {
        return template;
    }
}