var allProducts = [];
//faster way instead of typing out below 14 line new Product--this is variable array for it
var productNames = ['boots','chair','scissors', 'water_can', 'wine_glass', 'bag', 'banana', 'cthulhu', 'dragon', 'pen', 'shark', 'sweep', 'unicorn', 'usb'];

function Product (name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.views = 0;
  allProducts.push(this);
};

//functions job is to create object--- this is replacing 14 var lines
(function buildAlbum() {
  //for loop will take every element in array and build object
  for (var i = 0; i < productNames.length; i++){
    //feeding into contructor, replacing 14 var lines
    new Product(productNames[i], 'img/' + productNames[i] + '.jpg');
  }
})();

//buildAlbum(); //this calls function
//----OR----
//otherwise to avoid more text calling make iffey (wrap these around functions) -this is not best way- it avoids availabilitly to rebuild. will be used later though.

//faster way instead of typing out below 14 line new Product--

//------done building products above----------

//object literal
var productRank = {
  //using object literal
  totalClicks: 0,
  leftObj: null,
  midObj: null,
  rightObj: null,
  resultsEl: document.getElementById('results'), //results is in html button id

  //we need to grab into html
  leftEl: document.getElementById('pic1'),
  midEl: document.getElementById('pic2'),
  rightEl: document.getElementById('pic3'),


  //know we need a method, so start here with method structure
  getRandomIndex: function() {
    return Math.floor(Math.random() * productNames.length); //check mdn syntax here math.random to guarentee correction
  },
  //console --type in productRank.getRandomIndex and make sure it is producing correctly
  displayImages: function () {
    productRank.leftObj = allProducts[productRank.getRandomIndex()];//we need to get objects from all products, get randomIndex choses a random number, returns an object and assigns it to left obj
    productRank.midObj = allProducts[productRank.getRandomIndex()];
    productRank.rightObj = allProducts[productRank.getRandomIndex()];

    //to validate
    if(productRank.leftObj === productRank.midObj || productRank.leftObj === productRank.rightObj || productRank.midObj == productRank.rightObj)
    {
    productRank.displayImages();
    }

    productRank.leftEl.src = productRank.leftObj.path; //path property value assigning it to source left element
    productRank.leftEl.id = productRank.leftObj.name;


    productRank.midEl.src = productRank.midObj.path;
    productRank.midEl.id = productRank.midObj.name;

    productRank.rightEl.src = productRank.rightObj.path;
    productRank.rightEl.id = productRank.rightObj.name;
  },

  //voting
  showResults: function(){
    if (this.totalClicks % 15 === 0){//total clicks mod 15.. mod does division and gived remainder
      this.resultsEl.hidden = false;
    }
  }

};

productRank.leftEl.addEventListener('click', function(){
  // productRank.tallyVotes();
  productRank.leftObj.tally += 1;
  productRank.totalClicks += 1;
  console.log(productRank.leftObj.name + ' has ' + productRank.leftObj.tally); //leftObj refers to object in our tally array
  productRank.showResults();//calling function above
  productRank.displayImages();

}); //leftEl is property that holds value

productRank.midEl.addEventListener('click', function(){
  // productRank.tallyVotes();
  productRank.midObj.tally += 1;
  productRank.totalClicks += 1;

  console.log(productRank.midObj.name + ' has ' + productRank.midObj.tally); //leftObj refers to object in our tally array
  productRank.showResults();//calling function above
  productRank.displayImages();

});

productRank.rightEl.addEventListener('click', function(){

  // productRank.tallyVotes();
  productRank.rightObj.tally += 1;
  productRank.totalClicks += 1;

  console.log(productRank.rightObj.name + ' has ' + productRank.rightObj.tally); //leftObj refers to object in our tally array
  productRank.showResults();//calling function above
  productRank.displayImages();

});
// productRank.midEl.addEventListener('click', productRank.displayImages);
// productRank.rightEl.addEventListener('click', productRank.displayImages);

productRank.displayImages();
