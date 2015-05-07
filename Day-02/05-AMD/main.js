require(['SalaryCalculator','SalaryCalculatorView','utils','jquery'], function(SalaryCalculator,SalaryCalculatorView,utils,jquery){
    $(function(){
        var calculator = new SalaryCalculator();
        var view1 = new SalaryCalculatorView(calculator);
        view1.init();
        view1.render();
        view1.$root.appendTo(document.body);
    })
});
