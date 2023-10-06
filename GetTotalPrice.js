function getTotalPrice(productsArray)
{
    if (!Array.isArray(productsArray))
    {
        throw new Error('Erreur : Le parametre doit etre un array');
    }

    let totalPrice = 0;

    for (const product of productsArray)
    {
        if (typeof product !== 'object')
        {
            throw new Error('Erreur : ' + product + ' n\'est pas un objet.');
        }

        if ('price' in product)
        {
            totalPrice += product.price;
        }
    }

    return totalPrice;
}
