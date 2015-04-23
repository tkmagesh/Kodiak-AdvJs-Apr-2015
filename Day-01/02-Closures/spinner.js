spinner

up(), down()

spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3
spinner.up() // => 4

spinner.down() // => 3
spinner.down() // => 2
spinner.down() // => 1
spinner.down() // => 0
spinner.down() // => -1


function getSpinner(){
    var count = 0;
    function inc(){
        return ++count;
    }
    function dec(){
        return --count;
    }
    return {
        up : inc,
        down : dec
    }
}

var primeFinder = (function(){
    var cache = {};
    return function(n){
        if (typeof cache[n] !== "undefined")
            return cache[n];
        console.log("processing for " + n);
        if (n <= 3) {
            cache[n] = true;
        }
        else{
            cache[n] = true;
            for(var i=2; i<=(n/2); i++){
                if (n % i === 0) {
                    cache[n] = false;
                    break;
                }
            }
        }
        return cache[n];
    }
})();

var primeFinder = (function(){
    var cache = {};
    function checkPrime(n){
        console.log("processing for " + n);
        if (n <= 3) return true;
        for(var i=2; i<= (n/2); i++)
            if (n%i == 0) return false;
        return true;
    }

    return function(n){
        if (typeof cache[n] === "undefined")
            cache[n] = checkPrime(n);
        return cache[n];
    }
})();

function getMemorized(fn){
    var cache = {};
    return function(n){
        if (typeof cache[n] === "undefined")
            cache[n] = fn(n);
        return cache[n];
    }
}

function isOdd(n){
  console.log("checking odd for " , n);
  return n % 2 === 0;
}

var memorizedOddFinder = getMemorized(isOdd);

function add(x,y){
    console.log("adding ", x , " and ", y);
    return x + y;
}














