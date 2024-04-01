// javascript - make sure you write a code that returns the photo of the person who quoted the insult along with the photo of the person
let mealOptions = [
    " 3 whole eggs + 1c cooked oatmeal + 1 banana",
    " 2 scoops whey protein + 1c cooked oatmeal + 1 banana",
    " 5oz cooked ground turkey + 1c cooked oatmeal + 1 banana"
    
    
]


let generateButton = document.getElementById("btn-el")
generateButton.addEventListener("click", function(){
    text();
})

let mealEl = document.getElementById("mealoption-el")

function text() {
    let random = Math.floor(Math.random() * mealOptions.length)
    console.log(mealOptions[random])
    mealEl.textContent = "Meal 1: " + mealOptions[random];
    
}// javascript

//-------------
let mealOptions2 = [
    "4oz salmon + 1 sweet potato - 5 inches long (130g) + 5 asparagus spears",
    "4oz basa/tilapia + 1/2c jasmine rice + unlimited brocoli/cauliflower/greenbeans/brussel sprouts",
    "5oz cooked ground turkey + 1/2c jasmine rice + unlimited brocoli/cauliflower/greenbeans/brussel sprouts",
]


let generateButton2 = document.getElementById("btn2-el")
generateButton2.addEventListener("click", function(){
    text2();
})

let mealEl2 = document.getElementById("mealoption2-el")

function text2() {
    let random2 = Math.floor(Math.random() * mealOptions2.length)
    console.log(mealOptions2[random2])
    mealEl2.textContent = "Meal 2: " + mealOptions2[random2];
    
}

//-----------------
let mealOptions3 = [
    "5oz ground turkey + 1 sweet potato - 5 inches long (130g) + 5 asparagus spears",
    "2 scoops of whey protein + 3/4c full fat plain greek yogurt + 1/3c frozen berries",
    "3 whole eggs + 2c spinach + 1 tomato + 1/2c jasmine rice"
]


let generateButton3 = document.getElementById("btn3-el")
generateButton3.addEventListener("click", function(){
    text3();
})

let mealEl3 = document.getElementById("mealoption3-el")

function text3() {
    let random3 = Math.floor(Math.random() * mealOptions3.length)
    console.log(mealOptions[random3])
    mealEl3.textContent = "Meal 3: " + mealOptions3[random3];
    
}