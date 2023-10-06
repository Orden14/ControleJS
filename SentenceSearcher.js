function sentenceSearcher(sentences, word)
{
    if (typeof sentences !== 'string' || typeof word !== 'string')
    {
        throw new Error('Erreur : les parametres doivent être de type String');
    }

    const sentencesToArray = sentences.split(/[.?!]+(?:\s+|$)/);

    for (const sentence of sentencesToArray)
    {
        if (sentence.toLowerCase().includes(word.toLowerCase()))
        {
            return sentence;
        }
    }

    return '';
}
