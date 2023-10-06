(async function ()
{
    try
    {
        const fetchedData = await fetchUsers();
        const usersId = fetchedData.results;

        createUserDivs(usersId);

        const randomUserButton = document.getElementById('randomUserButton');
        randomUserButton.addEventListener('click', () =>
        {
            const randomIndex = Math.floor(Math.random() * usersId.length);
            const randomUser = usersId[randomIndex];
            const userFullName = randomUser.name.first + ' ' + randomUser.name.last;
            
            alert('Utilisateur aléatoire : ' + userFullName);
        });

    } catch (error)
    {
        console.error('Erreur pendant le fetching des users : ', error);
    }
})();

async function fetchUsers()
{
    try
    {
        const res = await fetch('https://randomuser.me/api/?results=100');

        if (!res.ok)
        {
            throw new Error('Erreur HTTP : ' + res.status);
        }

        const obj = await res.json();

        return obj;
    } catch (error)
    {
        throw new Error('Erreur pendant le fetching des users : ' + error.message);
    }
}

function createUserDivs(usersId)
{
    const usersContainer = document.getElementById('users-container');

    for (const userId in usersId)
    {
        const user = usersId[userId];
        const userDiv = document.createElement('div');

        userDiv.classList.add('col-md-3');
        userDiv.classList.add('mt-5');
        userDiv.classList.add('bg-light');

        userDiv.innerHTML = '<h3>' + user.name.first + user.name.last + '</h3>' 
                                + '<p>Téléphone : ' + user.phone + '</p>'
                                + '<img src=' + user.picture.large + '></img>'
                                ;

        usersContainer.appendChild(userDiv);
    } 
}