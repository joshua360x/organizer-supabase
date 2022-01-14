// import { deleteParticpant } from './fetch-utils.js';

export async function renderWorkshop(workshop) {



    const div = document.createElement('div');
    const p = document.createElement('p');
    
    p.textContent = workshop.name;

    div.append(p);

    
    

    return div;


}