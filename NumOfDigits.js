function numOfDigits(userInput)
{
    if (!Number.isInteger(userInput))
    {
        throw new Error('La valeur passée n\'est pas un nombre entier.');
    }

    const inputToString = userInput.toString();
    const digitsCount = inputToString.length;

    return digitsCount;
}
