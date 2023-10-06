function sentenceSearcher(sentences, word)
{
    const sentencesToArray = sentences.split(/[.?!]+(?:\s+|$)/);

    for (const sentence of sentencesToArray)
    {
        if (sentence.toLowerCase().includes(word.toLowerCase()))
        {
            return sentence;
        }
    }

    return "Le mot n'a pas été trouvé dans les phrases passées en argument."
}
