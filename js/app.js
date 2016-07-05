var products = ['bag.jpg', 'banana.jpg','boots.jpg','chair.jpg','cthulhu.jpg','dragon.jpg','pen.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'unicorn.jpg', 'usb.gif', 'water_can.jpg','wine_glass.jpg'];
var barData = {
  labels:	[],
  datasets : [
    {
      // fillColor : '#48A497',
      // strokeColor : '#48A4D1',
      backgroundColor: '#48A497',
      data : []
    },
    {
      // fillColor : 'rgba(73,188,170,0.4)',
      // strokeColor : 'rgba(72,174,209,0.4)',
      backgroundColor: '#48A497',
      data : []
    }
  ]
};



var things =[];
var produce = document.getElementById('resultTable');
var produceChart = document.getElementById('filled');

function pic (spot){
  this.path = 'img/'+ products[spot];
  this.item = products[spot].slice(0,-4);
  this.tally = 0;
  this.views = 0;
  barData.labels.push(this.item);
}

function create(){
  for (var i=0; i<products.length; i++){
    var thing = new pic(i);
    things.push(thing);
  }
}

create();
console.log(things);

var productRank = {
  totalClicks: 0,
  pic1: null,
  pic2: null,
  pic3: null,
  barChart: null,

  results: document.getElementById('press'),
  picA: document.getElementById('picA'),
  picB: document.getElementById('picB'),
  picC: document.getElementById('picC'),

  getRandomIndex: function() {
    return Math.floor(Math.random() * products.length);
  },

  selection: function () {
    productRank.pic1 = things[productRank.getRandomIndex()];
    productRank.pic2 = things[productRank.getRandomIndex()];
    productRank.pic3 = things[productRank.getRandomIndex()];

    if(productRank.pic1 === productRank.pic2 || productRank.pic1 === productRank.pic3 || productRank.pic2 === productRank.pic3)
    {
      productRank.selection();
      console.log('redo');
    }else{
      productRank.pic1.views += 1
      productRank.pic2.views += 1
      productRank.pic3.views += 1
    }
    productRank.picA.src = productRank.pic1.path;
    productRank.picA.id = productRank.pic1.item;
    productRank.picB.src = productRank.pic2.path;
    productRank.picB.id = productRank.pic2.item;
    productRank.picC.src = productRank.pic3.path;
    productRank.picC.id = productRank.pic3.item;
  },

  showResults: function(){
    if (productRank.totalClicks % 15 === 0){
      productRank.results.hidden = false;
    }else{
      productRank.results.hidden = true;
      produceChart.hidden = true;
    }
  }
};

productRank.selection();
console.log(productRank.pic1);

productRank.picA.addEventListener('click', function(){
  productRank.pic1.tally += 1;
  productRank.totalClicks += 1;
  console.log(productRank.pic1.item + ' has ' + productRank.pic1.tally);
  productRank.showResults();
  productRank.selection();
});

productRank.picB.addEventListener('click', function(){
  productRank.pic2.tally += 1;
  productRank.totalClicks += 1;
  console.log(productRank.pic2.item + ' has ' + productRank.pic2.tally);
  productRank.showResults();
  productRank.selection();
});

productRank.picC.addEventListener('click', function(){
  productRank.pic3.tally += 1;
  productRank.totalClicks += 1;
  console.log(productRank.pic3.item + ' has ' + productRank.pic3.tally);
  productRank.showResults();
  productRank.selection();
});

var income = document.getElementById('filled').getContext('2d');

function createChart(){
  produceChart.hidden = false;
  for(var i=0; i<things.length; i++){
    barData.datasets[0].data[i] =things[i].tally;
    barData.datasets[1].data[i] = things[i].views;
  };
  if(localStorage.tallies){
    var bringTallies = JSON.parse(localStorage.tallies);
    var bringViews = JSON.parse(localStorage.Views);
    for(var i=0; i<things.length; i++){
      barData.datasets[1].data[i] += bringViews[i];
      barData.datasets[0].data[i] += bringTallies[i];
    }
    localStorage.setItem('tallies', JSON.stringify(barData.datasets[0].data));
    localStorage.setItem('Views', JSON.stringify(barData.datasets[1].data));
  }else{
    localStorage.setItem('tallies', JSON.stringify(barData.datasets[0].data));
    localStorage.setItem('Views', JSON.stringify(barData.datasets[1].data));
    console.log(barData);
  }
  new Chart.Bar(income, {
    data: barData
  });
};

productRank.results.addEventListener('click', function(event){
  event.preventDefault();
  createChart();
  console.log('chart is created');
});

var trial = document.getElementById('trial').getContext('2d');

var chartData = {
  labels: ['1', '2', '3'],
  datasets : [
    {
      // fillColor : '#48A497',
      // strokeColor : '#48A4D1',
      backgroundColor: '#48A497',
      data : [3,8,6]
    },
    {
      // fillColor : 'rgba(73,188,170,0.4)',
      // strokeColor : 'rgba(72,174,209,0.4)',
      backgroundColor: '#48A497',
      data : [2,5,1]
    }
  ]
};
new Chart.Bar(trial, {
    data: chartData
    // options: {
    //   responsive: true,
    //   scales: {
    //     yAxes: [{
    //       ticks: {
    //         min: 0,
    //         stepSize: 10
    //       }
    //     }]
    //   }
    // }
  });
