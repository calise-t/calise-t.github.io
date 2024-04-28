const coffeeName = ["BERGERON - MEXICAN COFFEE", "DON QUIXOTE - SPANISH COFFEE", "DUMAS - FRENCH COFFEE", "ESPRESSO MARTINI", "ULYSSESS - IRISH COFFEE"];
const coffeeImage = ["img/coffee-1.jpg","img/coffee-2.jpg","img/coffee-3.jpg","img/coffee-4.jpg","img/coffee-5.jpg"];
const coffeeIngridients = [
    `<li>5 ounces hot coffee</li>
    <li>1/8 tsp ground cloves</li>
    <li>1/8 tsp ground cinnamon</li>
    <li>1.5 ounces tequila</li>
    <li>Half an ounce of Kahlúa</li>
    <li>2 ounces vanilla ice cream</li>`,
    `<li>1 cup hot coffee</li>
    <li>Half an ounce Tia Maria sweet liqueur</li>
    <li>Half an ounce rum</li>
    <li>Whipped cream</li>
    <li>Maraschino cherry</li>`,
    `<li>1 cup hot coffee</li>
    <li>1 ounce cognac</li>
    <li>1 ounce amaretto</li>
    <li>Shaved almonds</li>
    <li>Whipped cream</li>`,
    `<li>1 espresso shot</li>
    <li>Vodka</li>
    <li>Kahlúa</li>
    <li>SImple syrup</li>
    <li>Cocktail shaker</li>
    <li>Martini glass</li>
    <li>Ice cubes</li>`,
    `<li>1 cup hot coffee</li>
    <li>2 ounces Irish whiskey</li>
    <li>1 ounce spiced stout syrup</li>
    <li>Lightly whipped cream</li>
    <li><Nutmeg/li>`
];

const coffeeInstruction = [
    `<li>Preheat the glass.</li>
    <li>Combine spices, tequila and Kahlúa.</li>
    <li>Pour freshly brewed coffee over liqueur.</li>
    <li>Top with vanilla ice cream and a dusting of more cinnamon.</li>`,
    `<li>Preheat the glass.</li>
    <li>Combine Tia Maria liqueur and freshly brewed coffee.</li>
    <li>Top with whipped cream and garnish with a cherry. </li>`,
    `<li>Preheat the glass.</li>
    <li>Fill the glass with an ounce of cognac and an ounce of amaretto.</li>
    <li>Pour freshly brewed black coffee over liquor.</li>
    <li>Top with whipped cream and shaved almonds.</li>`,
    `<li>Brew espresso and then pour into a bowl to cool swiftly.</li>
    <li>Fill the cocktail shaker with ice cubes.</li>
    <li>Make sure the espresso is completely cooled. If needed, put it in the freezer for a few minutes, so as not to melt the ice.</li>
    <li>Add cooled espresso, vodka and simple syrup to the shaker. Then add Kahlúa.</li>
    <li>Vigorously shake your cocktail. Shake it hard to create a lovely foam!</li>
    <li>Swiftly strain your espresso martini into a martini glass, to ensure the lovely foam stays on top.</li>`,
    `<li>Preheat the glass.</li>
    <li>Pour black coffee into glass until three-quarters of the way full.</li>
    <li>Add Irish whiskey and spiced stout syrup.</li>
    <li>Top with lightly whipped cream and a dusting of nutmeg.</li>`
];


const coffeeList = document.querySelectorAll("header a");

coffeeList.forEach((coffee, index) => {
    coffee.addEventListener("click", () => {
        displayCoffee(index);
    });
});

function displayCoffee(index) {
    document.getElementById("coffee-name").innerHTML = coffeeName[index];
    document.getElementById("coffee-img").src = coffeeImage[index];
    document.getElementById("coffee-ingred").innerHTML = coffeeIngridients[index];
    document.getElementById("coffee-instru").innerHTML = coffeeInstruction[index];

}

