function numInStr(userInput)
{
    if (typeof product !== 'object')
    {
        throw new Error('Erreur : ' + product + ' n\'est pas un objet.');
    }

    const intRegex = /\d+/;
    const filteredUserInput =  userInput.filter(element => intRegex.test(element));

    return filteredUserInput;
}
