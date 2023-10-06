function numInStr(userInput) {
    const intRegex = /\d+/;
    const filteredUserInput =  userInput.filter(element => intRegex.test(element));

    return filteredUserInput;
}
