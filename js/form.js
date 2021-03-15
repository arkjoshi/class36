class Form{
    constructor(){}

    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(450,150);

        var input= createInput("Name");
        input.position(450,270);

        var button=createButton("PLAY");
        button.position(500,330);

        button.mousePressed(function(){
           input.hide();
           button.hide();
            
           var name=input.value();

           var greeting = createElement("h3");
           greeting.html("Hello "+ name+ " " + ":D");
           greeting.position(450,290);
        })

    }
}