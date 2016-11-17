window.onload = function(){
    $("lookup").onclick = search_it;
    
};

function search(Jamaica){
       var data= Jamaica.responseText || "no response text";
                        alert(data);
                        $('result').update(data);
};
//something wrong with this code, world1.js is working better
function search_it(){
    new Ajax.Request( "world.php",{
        method: "get",
        parameters: $('term').serialize(true),
        onSuccess: search
    });
};
