 //Model
define([], function(){
    function SalaryCalculator(){

        var _data = {
            basic : 0,
            hra : 0,
            da : 0,
            tax : 0,
            salary : 0
        };

        this.get = function(attrName){
            return _data[attrName];
        };

        this.set = function(attrName, value){
            _data[attrName] = value;

            //trigger change event
            var listenerFns = _events[attrName] || [];
            listenerFns.forEach(function (listenerFn){
                setTimeout(listenerFn);
            });

        };

        var _events = {

        };

        this.addEventListener = function(attrName, listenerFn){
            _events[attrName] = _events[attrName] || [];
            _events[attrName].push( listenerFn);
        };

        this.removeEventListener = function(attrName, listenerFn){
            //Fill in the blanks
        };


    }
    SalaryCalculator.prototype.calculate = function(){
        var gross = this.get('basic') + this.get('hra') + this.get('da');
        var net = gross * ((100-this.get('tax'))/100);
        this.set('salary', net);
    }

    return SalaryCalculator;
});
