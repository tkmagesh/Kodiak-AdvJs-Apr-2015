define(['jquery', 'text!calculatorTemplate.html'], function($, templateHTML){
    function SalaryCalculatorView(calculator){
        var $root = this.$root = $("<div></div>")
        this.init = function(){
            //Model change events
            calculator.addEventListener('salary', function(){
               $("#divResult", $root).html(calculator.get('salary'));
            });

            calculator.addEventListener('basic', function(){
                $("#txtBasic", $root).val(calculator.get('basic'));
            });

            calculator.addEventListener('hra', function(){
                $("#txtHra", $root).val(calculator.get('hra'));
            });

            calculator.addEventListener('da', function(){
                $("#txtDa", $root).val(calculator.get('da'));
            });

            calculator.addEventListener('tax', function(){
                $("#rangeTax", $root).val(calculator.get('tax'));
                $("#spanTax", $root).html(calculator.get('tax'));
            });

            //Listens to UI Events
            //$("#txtBasic", $root).change(function(){
            $root.on("change","#txtBasic", function(){
               calculator.set('basic', this.value.toInt());
            });
            $root.on("change","#txtHra", function(){
               calculator.set('hra', this.value.toInt());
            });
            $root.on("change","#txtDa", function(){
               calculator.set('da', this.value.toInt());
            });
            $root.on("change","#rangeTax", function(){
               calculator.set('tax', this.value.toInt());
            });
           $root.on("click", "#btnCalculate", function(){
               calculator.calculate();
           });

        }

        this.render = function(){
            $root.html(templateHTML);
        }
    }
    return SalaryCalculatorView;
});
