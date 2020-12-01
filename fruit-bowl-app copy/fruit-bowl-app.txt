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
    
    if(this.readyState == 4 && this.status == 200) {
        
        // do something cuz the data has arrived
        fruits = JSON.parse(this.responseText);
        fruitifyMenu();
        
    } // end if
    
} // end onreadystate..

xhr.open("GET", "json/fruit.json", true);
xhr.send();

function fruitifyMenu() {
    
    for(var i=0; i < fruits.length; i++) {
        
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = fruits[i].name;
        fruitMenu.appendChild(opt);
        
    }
}

// runs on button click
function addRandomFruit() {

    container.style.backgroundImage = "url('images/blender/blender.png')"; // swap bg img
    // if the reciept still has mixed text gibberish, delete it
    if(newReceiptStr != "") { // if it has the gibberish
        newReceiptStr = ""; // delete all the gibberish
        receipt.innerHTML = ""; // empty the receipt text
    }
    // rand num between 0 and max array index value
    randNum = Math.floor(Math.random()*fruits.length);
    var fruitPic = new Image(); // to hold random image
    fruitPic.src = `images/fruit/${fruits[randNum].name}.png`;
    blender.appendChild(fruitPic);

    // update total price
    price = fruits[randNum].price;
    price = Number(price);
    tot += price;
    totPrice.innerHTML = "$" + tot.toFixed(2);
    receipt.innerHTML += `${fruits[randNum].name} `;

} // function addRandomFruit()

// runs on select menu choice
function addSelectedFruit() {

    container.style.backgroundImage = "url('images/blender/blender.png')"; // swap bg img
    if(newReceiptStr != "") {
        newReceiptStr = "";
        receipt.innerHTML = "";
    }
    var s = fruitMenu.value; // the selected option value
    var fruitPic = new Image(); // to hold selected image
    fruitPic.src = `images/fruit/${fruits[s].name}.png`;
    blender.appendChild(fruitPic);

    // update total price
    price = fruits[s].price; // String
    price = Number(price); // Number
    tot += price; // Add price to running total
    totPrice.innerHTML = "$" + tot.toFixed(2);
    receipt.innerHTML += `${fruits[s].name} `;

} // add addSelectedFruit()

// OUTPUT A RUNNING TOTAL OF PRICE
// every time a fruit is added, update 
// total price

// in another H3, output the names of
// the fruit as they are added
// later we will have a BLEND button
// that scrambles the letters and replaces
// the fruit pix w a fruit smoothie pic

function mix() {

    // play audio/blender-sound.m4a
    var sound = new Audio();
    sound.src = `audio/blender-sound.m4a`;
    sound.play();

    // when the sound is done
    sound.addEventListener("ended", smoothify);

}

    
function smoothify() { // func plays on sound "ended"
    blender.innerHTML = ""; // empty the blender div of all fruit
    container.style.backgroundImage = "url('images/blender/blender-smoothie.png')"; // swap bg img to the smoothie pic
    receiptStr = receipt.innerHTML; // pass receipt txt to str
    var newReceiptArr = []; // declare array to hold mixed chars
    var rand = 0; // for rand nums  
    for( var i = 0; i < receiptStr.length*1.5; i++ ) {
        rand = Math.floor(Math.random()*receiptStr.length);
        newReceiptArr.push(receiptStr[rand]); // rush rand char 
    }
    newReceiptStr = newReceiptArr.join(' '); // array to string
    receipt.style.cssText = "width:350px; background-color: forestgreen; color: white; font-weight: bold; left: 150px; top: 150px; border-radius: 35px; min-height: 400px";
    receipt.innerText = newReceiptStr; // output mixed str 
}







