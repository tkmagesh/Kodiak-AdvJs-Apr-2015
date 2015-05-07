var products = [
    {id : 5, name : "Pen", cost : 40, units : 20, category : 2},
    {id : 8, name : "Hen", cost : 80, units : 70, category : 1},
    {id : 4, name : "Den", cost : 90, units : 50, category : 2},
    {id : 9, name : "Ten", cost : 60, units : 80, category : 1},
    {id : 2, name : "Len", cost : 70, units : 30, category : 2},
    {id : 6, name : "Zen", cost : 30, units : 40, category : 1}
]



console.log("Default list");
console.table(products);

function print(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}

print("Sort", function(){
    print("After sorting [default]..", function(){
        var sort = function(){
            for(var i=0; i<products.length-1; i++)
                for(var j=i+1; j<products.length; j++){
                    var left = products[i],
                        right = products[j];
                    if (left.id > right.id){
                        products[i] = products[j];
                        products[j] = left;
                    }
                }
        }
        sort();
        console.table(products);
    });
    var sort = function(list, attrName){
        for(var i=0; i<list.length-1; i++)
            for(var j=i+1; j<list.length; j++){
                var left = list[i],
                    right = list[j];
                if (left[attrName] > right[attrName]){
                    list[i] = list[j];
                    list[j] = left;
                }
            }
    }
    print("After sorting [cost]..", function(){
        sort(products,"cost");
        console.table(products);
    })
    print("After sorting [units]..", function(){
        sort(products,"units");
        console.table(products);
    });

    print("After sorting [value = units * cost]", function(){
        var sort = function(list, comparerFn){
            for(var i=0; i<list.length-1; i++)
                for(var j=i+1; j<list.length; j++){
                    var left = list[i],
                        right = list[j];
                    if (comparerFn(left,right) > 0){
                        list[i] = list[j];
                        list[j] = left;
                    }
                }
        }
        var productComparerByValue = function(p1, p2){
            var p1Value = p1.units * p1.cost,
                p2Value = p2.units * p2.cost;

            if (p1Value < p2Value) return -1;
            if (p1Value > p2Value) return 1;
            return 0;
        }
        sort(products, productComparerByValue);
        console.table(products);
    })
});

print("filter", function(){
   var filter = function(){
       var result = [];
       for(var i=0; i<products.length ; i++)
           if (products[i].cost > 50)
               result.push(products[i]);
       return result;
   }

   print("All costly products [cost > 50]", function(){
        var costlyProducts = filter();
       console.table(costlyProducts);
   });

   print("Generic Filter", function(){
       var filter = function(list, criteriaFn){
           var result = [];
           for(var i=0; i<list.length ; i++)
               if (criteriaFn(list[i]))
                   result.push(list[i]);
           return result;
       };
       var productCriteriaByCostFactory = function(baseCost){
           return function(product){
               return product.cost > baseCost;
           }
       }
       var costlyProductCriteria = productCriteriaByCostFactory(50);
       var allCostlyProducts = filter(products, costlyProductCriteria);
       console.table(allCostlyProducts);

       function negate(criteriaFn){
           return function(){
               return !criteriaFn.apply(this,arguments);
           }
       };

       print("Affordable produts [ !costly products ]", function(){
           var affordableProductCriteria = negate(costlyProductCriteria);
           var affordableProducts = filter(products, affordableProductCriteria);
           console.table(affordableProducts);
       });
   });
});
