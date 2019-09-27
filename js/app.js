function addName(){
  var userName = prompt('Hello, what is your name?');
  return 'Hello ' + userName + '!  Here is your order!'
}

function howMany(){
  var count = prompt('How many do you want to order?');
  while(count === '' || isNaN(count)){
    count = prompt('Please enter a number.  How many do you want to order?');
  }
  return Number(count);
}

function getItem(){
  var order = '';
  var item;
  
  while (order !== 'pickles' && order !== 'beets') {
    order = prompt('Please enter "pickles" or "beets"...');
  }

  if (order === 'pickles'){
    item = '<img style="border:none;" src="images/pickle.png">';
  } else if (order === 'beets'){
    item = '<img style="border:none;" src="images/beet.png">';
  } 
  return item;
}

function showOrder(){
  var item = getItem();
  var total = howMany();
  var result = '';

  for(var i = 0; i < total; i++){
    var realCount = i + 1;
    result = result + '<p style="width: 150px; display: inline-block; border: 1px solid black;">Product #' + realCount + ' ' + item + '</p>'
  }
  return result;
}





