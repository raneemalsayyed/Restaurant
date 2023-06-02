'use strict';
let main= document.getElementsByTagName ("main")[0];
main.style.fontSize ='larger'
main.style.backgroundColor ='#C1D0B5'
main.style.backgroundColor ='#3C6255'
main.style.color ='White'
main.style.borderTop ='solid White 4px'
main.style.borderBottom ='solid black 15px'
main.style.fontFamily ='Poppins'

let body =document.getElementsByTagName ("body")[0];
body.style.backgroundColor ='#EDF1D6'

let i= 0

const allFood = [];
function Food(name, type, price) {
    this.foodId = '';
    this.foodName = name;
    this.foodType = type;
    this.price = price;
    this.id  =++i

    allFood.push(this);
}


Food.prototype.generateFoodID = function () {
    const min = 1000;
    const max = 9999;
    this.foodId = Math.floor(Math.random() * (max - min) + min);
}

Food.prototype.renderFoodInformation = function () {
    let table = document.getElementsByTagName("table")[0];
    let bodyrow = document.createElement("tr");
    bodyrow.style.display ='flex'
    bodyrow.style.gap ='10px'


    // let foodId = document.createElement("td");
    // foodId.textContent = `${this.foodId}`;
    // bodyrow.appendChild(foodId);

    let id = document.createElement("td");
    id.textContent = `${this.id}`;
    bodyrow.appendChild(id);

    let foodName = document.createElement("td");
    foodName.textContent = ` ${this.foodName}`;
    bodyrow.appendChild(foodName);


    let foodType = document.createElement("td");
    foodType.textContent = ` ${this.foodType}`;
    bodyrow.appendChild(foodType);

    let price = document.createElement("td");
    price.textContent = `${this.price}`;
    bodyrow.appendChild(price);

id.style.width='70px'
foodName.style.width='70px'
foodType.style.width='200px'
price.style.width='70px'

foodName.style.borderLeft ='1px solid'
foodType.style.borderLeft ='1px solid'
price.style.borderLeft ='1px solid'

    table.appendChild(bodyrow);
}

let render = document.getElementById("render");
let table = document.createElement("table");
let headTr = document.createElement("tr");
let thID = document.createElement("th");
let thName = document.createElement("th");
let thType = document.createElement("th");
let thPrice = document.createElement("th");

thID.textContent = `Id`;
thName.textContent = `Name`;
thType.textContent = `Type`;
thPrice.textContent = `price`;

headTr.appendChild(thID);
headTr.appendChild(thName);
headTr.appendChild(thType);
headTr.appendChild(thPrice);
table.appendChild(headTr);
render.appendChild(table);



render.style.paddingLeft ='25px'
render.style.marginTop ='10px'
headTr.style.display ='flex'
headTr.style.gap ='10px'
headTr.style.borderBottom ='1px solid'
render.style.paddingBottom ='45px'
thType.style.width ='200px'
thID.style.width ='70px'
thPrice.style.width ='70px'
thName.style.width ='70px'
table.style.border ='1px solid'

let th = document.getElementsByTagName("th");

for (let index = 1; index < th.length; index++) {
    const element = th[index];
    element.style.borderLeft ='1px solid'
}

function handler(e) {
    e.preventDefault();
    let foodName = e.target.name.value;
    let price = e.target.price.value;
    let select = e.target.select.value;

    const food = new Food(foodName, select, price);
    food.generateFoodID();
    food.renderFoodInformation()
}


let saveValues = document.getElementById('form');
saveValues.addEventListener('submit', handler);

form.style.padding = '25px'



let header = document.getElementsByTagName("header")[0];
header.style.justifyContent = 'space-Between'
header.style.display = 'flex'
header.style.paddingLeft = '25px'
header.style.paddingRight = '25px'
header.style.paddingBottom = '10px'
header.style.alignItems = 'center'
header.style.fontSize ='25px'
header.style.borderBottom ='solid black 10px'



let ul = document.getElementsByTagName("ul")[0];
let li = document.getElementsByTagName("li");
ul.style.display = 'flex'
ul.style.gap = '25px'
ul.style.margin = '15px'
ul.style.padding = '15px'


for (let index = 0; index < li.length; index++) {
    const element = li[index];
    element.style.listStyle = 'none'
}

let navDiv = document.getElementsByClassName("nav")[0];
navDiv.style.display = 'flex'
navDiv.style.alignItems = 'center'


let searchInput = document.getElementsByClassName("search")[0];
searchInput.style.height = '20px'


let resDiv = document.getElementsByClassName("res")[0];
resDiv.style.display = 'flex'
resDiv.style.justifyContent = 'left'
resDiv.style.alignItems = 'center'
resDiv.style.paddingLeft = '25px'


let footer = document.getElementsByTagName("footer")[0];
footer.style.display = 'flex'
footer.style.flexDirection = 'column'
footer.style.alignItems = 'center'
footer.style.paddingTop = '25px'


let iconsDiv = document.getElementsByClassName('icons')[0];
iconsDiv.style.display = 'flex'
iconsDiv.style.alignItems = 'center'
iconsDiv.style.gap = '10px'


let descriptionDiv = document.getElementsByClassName('description')[0];
descriptionDiv.style.paddingLeft = '25px'

let bothFormDivs = document.getElementsByClassName('both')[0];
bothFormDivs.style.display = 'flex'
bothFormDivs.style.gap = '30px'
bothFormDivs.style.margin = '20px'


let requiredP = document.getElementsByClassName('required')[0];
requiredP.style.width = '200px'

let buttonStyle =document.getElementsByClassName('button')[0];
buttonStyle.style.backgroundColor ='#99A98F'
buttonStyle.style.border= 'none'
buttonStyle.style.color= 'white'
buttonStyle.style.paddingTop= '10px'
buttonStyle.style.paddingBottom= '10px'
buttonStyle.style.paddingRight= '15px'
buttonStyle.style.paddingLeft= '15px'
buttonStyle.style.fontSize= '16px'
buttonStyle.style.borderRadius= '10px'
buttonStyle.style.textAlign= 'center'








