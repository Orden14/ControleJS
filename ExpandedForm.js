function expandedForm(userInput)
{
    if (!Number.isInteger(userInput))
    {
        throw new Error('La valeur passée n\'est pas un nombre entier.');
    }

    const inputToString = userInput.toString();
    const digitsCount = inputToString.length;
    let result = '';

    for (let i = 0; i < digitsCount; i++)
    {
        const digit = parseInt(inputToString[i]);

        if (digit !== 0 && i !== 0)
        {
            let power = digitsCount - i;
            let numberOfZeros = '';

            for (let x = 0; x < power; x++)
            {
                numberOfZeros += '0';
            }

            result += numberOfZeros + ' + ';
        }
        result += digit.toString();
    }

    return result;
}
