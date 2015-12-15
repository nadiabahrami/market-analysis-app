// var images = ["bag.jpg", "banana.jpg","boots.jpg","chair.jpg","cthulhu.jpg","dragon.jpg","pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg","wine_glass.jpg"];
var things =[];

var products = ["bag", "banana", "boots","chair", "cthulhu", "dragon", "pen","scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine_glass"];

function pic (spot){
  this.path = "img/"+ products[spot] +".jpg";
  this.item = products[spot]
  this.tally = 0;
  this.views = 0;
};

function create(){
  for (var i=0; i<products.length; i++){
    var thing = new pic(i);
    things.push(thing);
  };
};

create();
console.log(things)

var productRank = {

totalClicks: 0,
pic1: null,
pic2: null,
pic3: null,

results: document.getElementById("press"),
picA: document.getElementById("picA"),
picB: document.getElementById("picB"),
picC: document.getElementById("picC"),

//theThree: [],
getRandomIndex: function() {
  return Math.floor(Math.random() * products.length);
},

selection: function () {
  productRank.pic1 = things[productRank.getRandomIndex()];//we need to get objects from all products, get randomIndex choses a random number, returns an object and assigns it to left obj
  productRank.pic2 = things[productRank.getRandomIndex()];
  productRank.pic3 = things[productRank.getRandomIndex()];

  if(productRank.pic1 === productRank.pic2 || productRank.pic1 === productRank.pic3 || productRank.pic2 === productRank.pic3)
  {
  productRank.selection();
  console.log("redo");
  // }else{
  //      things[pic1].views+= 1;
  //      things[pic2].views+= 1;
  //      things[pic3].views+= 1;
  }
// selection: function(){
//   var one = Math.floor(Math.random()*products.length);
//   console.log(one);
//   //theThree.push(one);
//   var two = Math.floor(Math.random()*products.length);
//   console.log(two);
//   //theThree.push(two);
//   var three = Math.floor(Math.random()*products.length);
//   console.log(three);
//   //theThree.push(three);
//   if(one===two ||two===three||one===three){
//     console.log("reroll");
//     productRank.selection();
//   }else{
//     things[one].views+= 1;
//     things[two].views+= 1;
//     things[three].views+= 1;
//   };
//
   productRank.picA.src = productRank.pic1.path;
   productRank.picA.id = productRank.pic1.item;
   productRank.picB.src = productRank.pic2.path;
   productRank.picB.id = productRank.pic2.item;
   productRank.picC.src = productRank.pic3.path;
   productRank.picC.id = productRank.pic3.item;
},

showResults: function(){
  if (productRank.totalClicks % 15 === 0){//total clicks mod 15.. mod does division and gived remainder
    productRank.results.hidden = false;
  }else{
    productRank.results.hidden = true;

  }

}

};
productRank.selection();
console.log(productRank.pic1);

productRank.picA.addEventListener('click', function(){
  // productRank.tallyVotes();
  productRank.pic1.tally += 1;
  productRank.totalClicks += 1;
  console.log(productRank.pic1.item + ' has ' + productRank.pic1.tally); //leftObj refers to object in our tally array
  productRank.showResults();//calling function above
  productRank.selection();

}); //leftEl is property that holds value

productRank.picB.addEventListener('click', function(){
  // productRank.tallyVotes();
  productRank.pic2.tally += 1;
  productRank.totalClicks += 1;
  console.log(productRank.pic2.item + ' has ' + productRank.pic2.tally); //leftObj refers to object in our tally array
  productRank.showResults();//calling function above
  productRank.selection();


}); //leftEl is property that holds value

productRank.picC.addEventListener('click', function(){
  // productRank.tallyVotes();
  productRank.pic3.tally += 1;
  productRank.totalClicks += 1;
  console.log(productRank.pic3.item + ' has ' + productRank.pic3.tally); //leftObj refers to object in our tally array
  productRank.showResults();//calling function above
  productRank.selection();

}); //leftEl is property that holds value


function table(){
  produce = document.getElementById("press");
  produce.innerHTML = "";
  var makeTb = document.createElement("table");
  var makeTr = document.createElement("tr");
  var makeTh = document.createElement("th");
  makeTh.textContent= "Item";
  makeTr.appendChild(makeTh);
  var makeTh = document.createElement("th");
  makeTh.textContent= "Votes";
  makeTr.appendChild(makeTh);
  makeTb.appendChild(makeTr);

  for(var i=0; i<things.length; i++){
      var makeTr = document.createElement("tr");
      var makeTd = document.createElement("td");
      makeTd.textContent = things[i].item;
      makeTr.appendChild(makeTd)
      var makeTd = document.createElement("td");
      makeTd.textContent = things[i].tally;
      makeTr.appendChild(makeTd)
      makeTb.appendChild(makeTr);
  };
  produce.appendChild(makeTb);
}

productRank.results.addEventListener('click', function(event){
  event.preventDefault();
  table();

}); //leftEl is property that holds value
