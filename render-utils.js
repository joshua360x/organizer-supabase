import { deleteParticpant } from './fetch-utils.js';

export async function renderWorkshop(workshop) {



    const div = document.createElement('div');
    const p = document.createElement('p');
    
    p.textContent = workshop.name;
    div.append(p);

    for (const el of workshop.participants) {
        
        // const p1 = document.createElement('li');
        
        // p1.textContent = el.name;

        const partipantEL = document.createElement('li');
        partipantEL.textContent = el.name;



        partipantEL.addEventListener('click', async() => {
            await deleteParticpant(el.id);
            renderWorkshop();

        });

        div.append(partipantEL);
    }
    

    return div;


}