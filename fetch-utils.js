const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNzU3MywiZXhwIjoxOTU1MDgzNTczfQ.ItAD5AYhCLq3yVOxHVfShkrOdhiFsmpg3uT9tBIISV0';

const SUPABASE_URL = 'https://nhbazqqortcneqwecrjp.supabase.co';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session();
}


export async function getPartipants() {
    const response = await client
        .from('participants')
        .select('*, workshops (*)');

    return checkError(response);
}

export async function getWorkshops() {
    const response = await client
        .from('workshops')
        .select('*, participants (*)');

    return checkError(response);
}

export async function createWorkshop(workshop) {
    const response = await client
        .from('workshops')
        .insert([workshop]);
    return checkError(response);

}

export async function createParticipant(newPerson) {
    const response = await client
        .from('participants')
        .insert([newPerson]);

    return checkError(response);
}
export async function deleteParticpant(id) {
    const response = await client
        .from('participants')
        .delete()
        .match({ id })
        .single();

    return checkError(response);
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./workshop');
    }
}

export async function signupUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}
