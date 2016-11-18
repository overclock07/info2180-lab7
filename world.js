var term;
var lookup;
var box;

//main function
window.onload = function(){
    lookup = document.getElementById('lookup');
    box = document.getElementById("box");
    
    document.getElementById('lookup').onclick = function(){
        if(term.length < 1){
            alert("Please enter a country!")
        }
        
        else{
            new Ajax.Request("world.php",
            {
                method: "GET",
                parameters: {lookup: ''+term},
                onSuccess: callPHP,
                onFailure: failureFunc
            }
        );
        }
    }
  
  
  press();
};

function press(){
    term = document.getElementById("term").value;
    
    if(term.length < 1){
        alert("Please enter a country!")
    }
};

function checkbox(){
    if(box.checked){
        alert("checked");
        
        new Ajax.Request("world.php",
            {
                method: "GET",
                parameters: {all: "true"},
                onSuccess: callPHP,
                onFailure: failureFunc
            }
        );
    }
    
    if(box.unchecked){
        document.getElementById("lookup").innerHTML = "Lookup";
    }
};


function callPHP(responseObject){
    if(responseObject.status == 200){
        document.getElementById("result").innerHTML = responseObject.responseText;
    }
}

function callXmlPHP(responseObject){
    if(responseObject.status == 200){
        document.getElementById("result").innerHTML = responseObject.responseXML;
    }
}

function failureFunc(responseObject){
     alert("Did you press the enter key when finish typing???");
}
