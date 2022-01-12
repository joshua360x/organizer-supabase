import { checkAuth, getPartipants, logout } from '../fetch-utils.js';

// const partipantsEL = document.querySelector('.participants')


checkAuth();

const logoutButton = document.getElementById('logout');




window.addEventListener('load', async() => {
    const people = await getPartipants();
    // eslint-disable-next-line no-console
    console.log(people);


});




logoutButton.addEventListener('click', () => {
    logout();
});
