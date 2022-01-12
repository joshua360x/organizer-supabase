import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';

const partipantsEL = document.querySelector('.participants');


checkAuth();

const logoutButton = document.getElementById('logout');




window.addEventListener('load', async() => {
    const workshops = await getWorkshops();
    // eslint-disable-next-line no-console
    console.log(workshops);


    for (const workshop of workshops) {
        const div = document.createElement('div');
        const p = document.createElement('p');
        
        p.textContent = workshop.name;

        for (const el of workshop.participants) {
            
            const p1 = document.createElement('li');
            
            p1.textContent = el.name;

            // const partipantEL = document.createElement('p');
            // partipantEL.textContent = el.name;



            // bunnyELEMENT.addEventListener('click', async() => {
            //     await deleteBunny(el.id);
            //     displayFamilies();

            // });

            div.append(p1);
        }
        
        div.append(p);

        partipantsEL.append(div);
    }

});




logoutButton.addEventListener('click', () => {
    logout();
});
