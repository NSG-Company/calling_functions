const ageChecker = function (age) {

    if (age >= 18) {
        return true;
    } else {
        return false;
    }

};

const greetings = function (age) {
    if (ageChecker(age)) {
        return "hello there";
    } else {
        return "hello kiddo";
    }
};

console.log(greetings(18));
// maak een functie met één parameter: de leeftijd
// deze functie moet true retourneren als de leeftijd> = 18 is, false in alle andere gevallen
// bedenk een goede naam voor de functie en de parameter
// maak een tweede functie met één parameter: de leeftijd
// bedenk een goede naam voor de functie en de parameter
// deze tweede functie gebruikt (roept) de eerste functie op, geeft deze de leeftijd, om te controleren of we een volwassen leeftijd krijgen
// als het een volwassene is, zou de tweede functie 'Hallo daar' moeten retourneren
// als het geen volwassene is, zou het "Hey kiddo" moeten retourneren
// gebruik console.log om de geretourneerde waarde van de tweede functie weer te geven
// experimenteer zodat u zeker weet dat uw functie werkt.




/* VAT calculations
In this exercise we're going to let you figure out the steps a bit more.

On almost everything you buy you pay VAT: Value Added Taxes. This is one way for the government to put taxes on sold goods. The amount of VAT varies per kind of purchase. In the Netherlands you pay 21% VAT on most goods, 9% VAT on food and 0% on some types of purchases.

To calculate the VAT for a product with 21% VAT: baseprice * 0.21.

For example, the price for a computer without VAT is 1000. The VAT percentage for a computer is 21%. The VAT would be: 1000 * 0.21, so 210. The price including VAT would be: 1000 * 1.21, so 1210.

For example, the price for a loaf of bread without VAT is 2. The VAT percentage for a loaf of bread is 9%. The VAT would be: 2 * 0.09, so 0.18. The price including VAT would be: 2 * 1.09, so 2.18.

To calculate the VAT and base price from a product that you bought with VAT you can do the reverse calculation.

If you paid 1210 (including VAT) for a computer you can do: - 1210 / 1.21 to get the baseprice - 1210 - (1210 / 1.21) to get the VAT of 210

If you paid 2.18 (including VAT) for a loaf of bread you can do: - 2.18 / 1.09 to get the baseprice - 2.18 - (2.18 / 1.09) to get the VAT of 0.18 */



// VAT exercise 1
// Now let's write some code. First let's write a function that takes the base price and the VAT percentage and returns the price including VAT. You must do the calculation of the VAT amount in a separate function. So, in the spirit of the lesson: we have a main function that does the main calculation and another function that we call from this main function.

// Make sure your functions work by testing them with different values and checking the result with a calculator or pen and paper.


const calculateVAT = function (basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function (basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(calculatePriceIncludingVAT(1000, 21)); // 1210
console.log(calculatePriceIncludingVAT(2, 9)); // 2.18


// VAT exercise 2
// In this exercise we're going to calculate the base price and VAT amount. The main function you make should take the amount including VAT and the VAT percentage. The return value should be an array with two elements: base price and VAT amount. Again: make sure you use two functions, where the main one calls another function to do part of the calculation.

// Make sure your functions work by testing them with different values and checking the result with a calculator or pen and paper.

const calculateBasePrice = function (priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function (priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21)); // [1000, 210]
console.log(calculateBasePriceAndVAT(2.18, 9)); // [2, 0.18]



