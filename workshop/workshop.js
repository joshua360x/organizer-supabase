import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';
import { renderWorkshop } from '../render-utils.js';

const partipantsEL = document.querySelector('.participants');


checkAuth();

const logoutButton = document.getElementById('logout');




window.addEventListener('load', async() => {
    

    displayParticipants();
});

async function displayParticipants() {

    // const newDiv = await renderWorkshop(workshops)
    
    const workshops = await getWorkshops();
    for (const workshop of workshops) {
        const newDiv = await renderWorkshop(workshop);
        
        partipantsEL.append(newDiv);
    }
    
    // // eslint-disable-next-line no-console
    // console.log(workshops);
    // partipantsEL.textContent = '';


    // for (const workshop of workshops) {
    //     const div = document.createElement('div');
    //     const p = document.createElement('p');
        
    //     p.textContent = workshop.name;

    //     for (const el of workshop.participants) {
            
    //         // const p1 = document.createElement('li');
            
    //         // p1.textContent = el.name;

    //         const partipantEL = document.createElement('li');
    //         partipantEL.textContent = el.name;



    //         partipantEL.addEventListener('click', async() => {
    //             await deleteParticpant(el.id);
    //             displayParticipants();

    //         });

    //         div.append(partipantEL);
    //     }
        
    //     div.append(p);

    //     partipantsEL.append(div);
    // }

}


logoutButton.addEventListener('click', () => {
    logout();
});
