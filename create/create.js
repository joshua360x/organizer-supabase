import { checkAuth, createParticipant, getWorkshops, logout } from '../fetch-utils.js';

const partipantsEL = document.querySelector('select');
const formEL = document.querySelector('form');


checkAuth();

const logoutButton = document.getElementById('logout');


formEL.addEventListener('submit', async(e) => {
    e.preventDefault();
    const data = new FormData(formEL);
    const name = data.get('name');
    const workshop_id = data.get('workshopOptions');


    await createParticipant({
        workshop: workshop_id,
        name
    });
});


window.addEventListener('load', async() => {
    const workshop = await getWorkshops();
    // eslint-disable-next-line no-console
    console.log(workshop);
  // const participants = await getPartipants()
    
    for (const el of workshop) {
        const options = document.createElement('option');
        options.value = el.id;
        options.textContent = el.name;
        partipantsEL.append(options);
    }
});




logoutButton.addEventListener('click', () => {
    logout();
});
