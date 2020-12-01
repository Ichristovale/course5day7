// load the fruit data
var fruits = []; // to hold the loaded fruit data
var randNum = 0;
var container = document.getElementById("container");
var blender = document.getElementById("blender");
var fruitMenu = document.getElementById("fruitMenu");
// vars for calculating and outputting price totals
var totPrice = document.getElementById("totPrice");
var receipt = document.getElementById("receipt");
receipt.innerHTML = " JS-SMOOTHIE INGREDIENTS ";
var receiptStr = "";
var newReceiptStr = "";
var tot = 0;
var price = 0;

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if(xhr.responseText);
  // alert(xhr.responseText);
    //parse data and save it inot the variavle "fruits"
    
    fruits = JSON.parse(xhr.responseText);
    //call any functions that rely on the data
    fruitifyMenu()
    
} // end onreadystate..

xhr.open('GET', 'json/fruit.json', true);
xhr.send();

function fruitifyMenu() {
for(let i=0; i < fruits.length; i++){
    //create an option element for each fruit
    let opt = document.createElement('option');
    //use the fruit name as the content of the option element
    opt.innerHTML = fruits[i].name;
    //use the loop index as the option value
    opt.value = i;
    //add the option element to the select menu
    fruitMenu.appendChild(opt);
    
}//end loop
    

}
//runs on button click

// runs on button click
function addFruit() {
    let selectedIndex = event.target.value;
    let fruitName = fruits[selectedIndex].Name;
//create the image of the fruit and add to the blender
    let img = new Image();
    img.src = `images/fruit/${fruitName.toLowerCase()}.png`;
    //add to the blender
    blender.appendChild(img);

    //add the fruit price to the total price
    price += Number(fruits[selectedIndex].price);
    //output
} // function addRandomFruit()

// OUTPUT A RUNNING TOTAL OF PRICE
// every time a fruit is added, update 
// total price

// in another H3, output the names of
// the fruit as they are added
// later we will have a BLEND button
// that scrambles the letters and replaces
// the fruit pix w a fruit smoothie pic

function mix() {
//play blender sound
    let snd = new Audio();
    snd.src = 'audio/blender-sound.m4a';
    //run blending animation
    //when sound ends, serve the shake
    snd.addEventListener('ended', smoothify);
    
}

function smoothify() { // func plays on sound "ended"
    
    container.style.backgroundImage = 
}

