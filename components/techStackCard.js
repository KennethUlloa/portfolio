export function techCard(parent, tech) {
    const template = /*html*/`
    <div class="flex flex-col items-center gap-3">
          <i svg="" class="text-8xl">${tech.image}</i>
          <span>${tech.name}</span>
        </div>
    `;
    parent.insertAdjacentHTML("beforeend", template);
}