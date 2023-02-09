function printName (){
    helloName = "Hello John";

    function inner(){
        console.log(helloName);
    }

    inner();
}
setTimeout (function(){printName()}, 1000);

