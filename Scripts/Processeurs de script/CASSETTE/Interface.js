Content.makeFrontInterface(750, 475);
  // rotate //
reg angle = 0;

const var Panel1 = Content.getComponent("Panel1");
const var Panel2 = Content.getComponent("Panel2");

Panel1.loadImage("{PROJECT_FOLDER}roue2.png", "test");

Panel1.setPaintRoutine(function(g){
    g.rotate(Math.toRadians(angle), [this.get("width")/2, this.get("height")/2]);
    g.drawImage("test", [0, 0, this.get("width"), this.get("height")], 0, 0);
});

Panel2.setPaintRoutine(function(g){
    g.rotate(Math.toRadians(angle), [this.get("width")/2, this.get("height")/2]);
    g.drawImage("test", [0, 0, this.get("width"), this.get("height")], 0, 0);
});

Panel1.setTimerCallback(function(){
    angle = (angle + 1) % 360;
    Console.print(angle);
    this.repaint();
});


});

Panel1.startTimer(15);
Panel2.startTimer(15);




// eq //

const var EQ1 = Synth.getEffect("EQ1");
const var EQ2 = Synth.getEffect("EQ2");
const var Knob2 = Content.getComponent("Knob2");


inline function onKnob2Control(component, value)
{
	EQ1.setAttribute(EQ1.Gain, value);
	EQ2.setAttribute(EQ2.Gain, value);
};

Content.getComponent("Knob2").setControlCallback(onKnob2Control);


//bypass //

const var Button1 = Content.getComponent("Button1");
const var ScriptFX1 = Synth.getEffect("Script FX1");
const var Delay1 = Synth.getEffect("Delay1");
const var SimpleGain1 = Synth.getEffect("Simple Gain1");
const var ShapeFX1 = Synth.getEffect("Shape FX1");
const var INPUT = Synth.getEffect("INPUT");
const var OUTPUT = Synth.getEffect("OUTPUT");
const var SimpleGain2 = Synth.getEffect("Simple Gain2");
const var SimpleGain3 = Synth.getEffect("Simple Gain3");



inline function onButton1Control(component, value)
{
	EQ1.setBypassed(value);
	EQ2.setBypassed(value);
	ScriptFX1.setBypassed(value);
	Delay1.setBypassed(value);
	SimpleGain1.setBypassed(value);
	ShapeFX1.setBypassed(value);
	SimpleGain2.setBypassed(value);
	SimpleGain3.setBypassed(value);
	INPUT.setBypassed(value);
	OUTPUT.setBypassed(value);
	
};

Content.getComponent("Button1").setControlCallback(onButton1Control);


// reset //
const var Knob1 = Content.getComponent("Knob1");
const var Knob3 = Content.getComponent("Knob3");
const var Knob4 = Content.getComponent("Knob4");
const var Knob9 = Content.getComponent("Knob9");
const var Knob10 = Content.getComponent("Knob10");






const var Button2 = Content.getComponent("Button2");



inline function onButton2Control(component, value)
{
	Knob1.setValue(0);
	Knob2.setValue(0);
	Knob3.setValue(0);
	Knob4.setValue(100);
	Knob5.setValue(0);
	Knob9.setValue(0);
	Knob10.setValue(0);
    
    
	

Content.getComponent("Button2").setControlCallback(onButton2Control);


// script fx //
const var Knob8 = Content.getComponent("Knob8");



inline function onKnob1Control(component, value)
{
	ScriptFX1.setAttribute(ScriptFX1.trans, value);
	Knob8.setValue (Knob8.get ("max") * value);
	Knob8.changed();

};

Content.getComponent("Knob1").setControlCallback(onKnob1Control);


inline function onKnob8Control(component, value)
{
	SimpleGain3.setAttribute(SimpleGain3.Gain, -value);
};

Content.getComponent("Knob8").setControlCallback(onKnob8Control);




// shape fx mix //

const var Knob7 = Content.getComponent("Knob7");

inline function onKnob7Control(component, value
	
};

Content.getComponent("Knob7").setControlCallback(onKnob7Control);


// delay 1 mix //


{
	Delay1.setAttribute(Delay1.Mix, value);
};

Content.getComponent("Knob3").setControlCallback(onKnob3Control);


// stereo simple gain 1 //


inline function onKnob4Control(component, value)
{
	SimpleGain1.setAttribute(SimpleGain1.Width, value);
};

Content.getComponent("Knob4").setControlCallback(onKnob4Control);


// simple gain control shape fx //


const var Knob6 = Content.getComponent("Knob6");



inline function onKnob6Control(component, value)
{
	SimpleGain2.setAttribute(SimpleGain2.Gain, -value);
};

Content.getComponent("Knob6").setControlCallback(onKnob6Control);




inline function onKnob5Control(component, value)
{
	Knob6.setValue (Knob6.get ("max") * value);

Content.getComponent("Knob5").setControlCallback(onKnob5Control);


function onNoteOn()
{
	

	
}
 
