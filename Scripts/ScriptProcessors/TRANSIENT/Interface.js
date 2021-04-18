Content.makeFrontInterface(600, 500);

reg angle = 0;

const var Panel1 = Content.getComponent("Panel1");

Panel1.loadImage("{PROJECT_FOLDER}roue2.png", "test");

Panel1.setPaintRoutine(function(g){
    g.rotate(Math.toRadians(angle), [this.get("width")/2, this.get("height")/2]);
    g.drawImage("test", [0, 0, this.get("width"), this.get("height")], 0, 0);
});

Panel1.setTimerCallback(function(){
    angle = (angle + 1) % 360;
    Console.print(angle);
    this.repaint();
});

Panel1.startTimer(25);function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 