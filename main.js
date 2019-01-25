let cat = {
  name: "Mr. Snibbley",
  pets: 0,
  tolerance: 15
}

//needs to determine if current number of pets is less than the tolerance
//if it is then allow pets otherwise dont allow pets 
function petCat() {
  if (cat.pets <= cat.tolerance) {
    cat.pets++
  }
  draw()
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
