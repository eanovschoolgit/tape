Content.makeFrontInterface(600, 500);

const var Knob1 = Content.getComponent("Knob1");

const var Knob2 = Content.getComponent("Knob2");

const var Knob3 = Content.getComponent("Knob3");






inline function onKnob3Control(component, value)
{
	Knob1.setValue(value);
	Knob1.changed();
	Knob2.setValue(value);
	Knob2.changed();
};

Content.getComponent("Knob3").setControlCallback(onKnob3Control);
function onNoteOn()
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
 