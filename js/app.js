var images = ["bag.jpg", "banana.jpg","boots.jpg","chair.jpg","cthulhu.jpg","dragon.jpg","pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg","wine_glass.jpg"];
var products = ["bag", "banana", "boots","chair", "cthulhu", "dragon", "pen","scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine_glass"];

var things =[];

function pic (spot){
  this.path = "img/"+ products[spot] +".jpg";
  this.item = products[spot]
  this.votes = 0;
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

var theThree = [];

function selection(){
  theThree = [];
  var one = Math.floor(Math.random()*products.length);
  console.log(one);
  theThree.push(one);
  var two = Math.floor(Math.random()*products.length);
  console.log(two);
  theThree.push(two);
  var three = Math.floor(Math.random()*products.length);
  console.log(three);
  theThree.push(three);
  if(one===two |two===three|one===three){
    console.log("reroll");
    selection();
  }else{
    things[one].views+= 1;
    things[two].views+= 1;
    things[three].views+=1;
  }
}

selection();

function toPage(){
  var produce = document.getElementById("pics");
  for(var i=0; i<theThree.length; i++){
    var makeImg = document.createElement("img");
    var k = theThree[i];
    makeImg.src = things[k].path;
    produce.appendChild(makeImg)
  };
}

toPage();
var elFranchise = document.getElementById("pics");
