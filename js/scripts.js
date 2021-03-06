//  Business Logic
function cupsToPints(number){
  return number/2;
};

function pintsToQuarts(number){
  return number/2;
};

function quartsToGallons(number){
  return number/4;
};


// User Interface Logic
$(document).ready(function(){
  $("form#cups-form").submit(function(event){
    event.preventDefault();
    const cups = parseFloat($("input#cups").val());
    const result = cupsToPints(cups);
    $("#pints-result").text(result);
  });

  $("form#pints-form").submit(function(event){
    event.preventDefault();
    const pints = parseFloat($("input#pints").val());
    const result = pintsToQuarts(pints);
    $("#quarts-result").text(result);
  });

  $("form#quarts-form").submit(function(event){
    event.preventDefault();
    const quarts = parseFloat($("input#quarts").val());
    const result = quartsToGallons(quarts);
    $("#gallons-result").text(result);
  });
});