        // controller
        
        function selectStolpe(index){
            if(selectedElement != index.id){
                selectedElement = index.id
                yesNo = "enabled"
                yesNo2 = "enabled"
            } else{
                selectedElement = "ingen"
                yesNo = "disabled"
                yesNo2 = "disabled"
            }
        
            show();
        }

        function fjernStolpen(){
            delete numbers[(selectedElement - 1)]
            yesNo = "disabled"
            yesNo2 = "disabled"
            selectedElement = "ingen"
            numbers = numbers.filter(() => true)
            
            show();
        }

        function editStolpen(){
            if(!(10<inputValue || inputValue == undefined || inputValue == 0)){
                numbers[selectedElement -1] = inputValue;
            } else{
                alert("noe gikk galt");
            }
            show();
        }

        function addStolpe(){
            if(!(10<inputValue || inputValue == undefined || inputValue == 0)){
                numbers.push(inputValue);
    
            } else{
                alert("noe gikk galt");
            }
            show();
        }