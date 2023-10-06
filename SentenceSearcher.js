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

    return ''
}
