let cat = {
  name: "Mr. Snibbley",
  pets: 0,
  tolerance: 15,
  items: []
}

//needs to determine if current number of pets is less than the tolerance
//if it is then allow pets otherwise dont allow pets 
function petCat() {
  useItems()
  if (cat.pets <= cat.tolerance) {
    cat.pets++
  }
  draw()
}

function useItems() {
  for (let i = 0; i < cat.items.length; i++) {
    let item = cat.items[i]
    cat.tolerance += item.modifier
    console.log('the cat used', item.name)
    console.log('the cats new tolerance is', cat.tolerance)
  }
  cat.items = []
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
function Item(name, modifier) {
  this.name = name
  this.modifier = modifier
}

// let yarn = {
//   name: 'yarn',
//   modifier: 5
// }

let yarn = new Item('yarn', 5)
let lazerPointer = new Item('lazor pointer', 8)
let water = new Item('bucket of water', -10)

let items = [yarn, lazerPointer, water]



//function declaration
function drawItems() {
  let template = ""
  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    template += `<button type="button" onclick="findItem('${item.name}')">${item.name}</button>`
  }
  document.querySelector("#items").innerHTML = template
}

drawItems() //function invokation

//if you use a dictionary for items then you will change findItem to use bracketNotation instead of array.find()
let itemsDict = {
  yarn,
  lazerPointer,
  water
}

function findItem(itemName) {
  let foundItem = items.find(item => {
    return item.name == itemName
  })
  cat.items.push(foundItem)
}