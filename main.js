let cat = {
  name: "Mr. Snibbley",
  pets: 0,
  tolerance: 15,
  items: []
}

//needs to determine if current number of pets is less than the tolerance
//if it is then allow pets otherwise dont allow pets 
function petCat() {
  //we call useItems() here to run logic when the cat is pet and also 
  //keep that logic seperate and organized to adhere to the single responsibility principle
  useItems()
  if (cat.pets <= cat.tolerance) {
    cat.pets++
  }
  draw()
}

function useItems() {
  //iterate through each item in the array 
  //and increase the cats tolerance by the item's modifier amount
  for (let i = 0; i < cat.items.length; i++) {
    let item = cat.items[i] //this is known as an alias. the variable item will be the placeholder for each iterations value
    cat.tolerance += item.modifier
    console.log('the cat used', item.name)
    console.log('the cats new tolerance is', cat.tolerance)
  }
  cat.items = [] //this reassigns the cats items back to an empty array. in other words the items can only be used once per button click
}

function catnip() {
  cat.tolerance += 15
  console.log(cat.tolerance)
}

function draw() {
  document.querySelector("#cat-name").innerHTML = cat.name
  document.querySelector("#cat-pets").innerHTML = cat.pets.toString()
}
draw()

//------------------day 2 extension

//constructor function 
//a constructor function is similar to a blueprint in architecture, or a platonic form.
//There is never an Item itself but only instances of the function, lines 58-61
function Item(name, modifier) {
  this.name = name //the this keyword refers to the object that invoked the function (see lines 58-61)
  this.modifier = modifier
}

// let yarn = {
//   name: 'yarn',
//   modifier: 5
// }

let yarn = new Item('yarn', 5) //the new keyword means that a new object is being created
//the new object is referenced by the this keyword above(Item constructor function)
let lazerPointer = new Item('lazor pointer', 8)
let water = new Item('bucket of water', -10)

//because all of these elements are 'like elements' we can group them in collections/array's
//when we iterate over this array we are assured that every element will have the same properties because they're all like elements
let items = [yarn, lazerPointer, water]



//function declaration
function drawItems() {
  let template = "" //declare empty template string outside of the for loop
  for (let i = 0; i < items.length; i++) {
    let item = items[i] //alias (see line 24)
    template += `<button type="button" onclick="findItem('${item.name}')">${item.name}</button>`
    //we use += to concatonate the strings on line 72 and build up the template 
    //to contain as many instances of the string to the right of the += as there are loop iterations
  }
  document.querySelector("#items").innerHTML = template //set the element with id="items" innerHTML equal to the template string we built
}

drawItems() //function invokation

//if you use a dictionary for items then you will change findItem to use bracketNotation instead of Array.find()
let itemsDict = {
  yarn,
  lazerPointer,
  water
}

function findItem(itemName) {
  //utilize the .find() array method to find the item who's name equals the value of itemName
  //itemName is the placeholder for the string we pass during function invokation/call
  let foundItem = items.find(item => {
    return item.name == itemName
  })
  cat.items.push(foundItem) //add the foundItem object to the cat's items array
}
