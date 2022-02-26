modelsatus = "";
textinputvalue = "";
objectsfoundarray = [];

function preload() {

}


function setup() {
    mycanvas = createCanvas(500, 300);
    mycanvas.center();
    myvideo = createCapture(VIDEO);
    myvideo.size(500, 300);
    myvideo.hide();
}

function startapp() {
    cocomodel = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("modelstatus").innerHTML = "Detecting Objects";
    textinputvalue = document.getElementById("objectinput").value;

}

function modelloaded() {
    console.log("Model has Loaded!");
    modelstatus = true;

}

function draw() {
    image(myvideo, 0, 0, 500, 300);
    if (modelstatus != "") {
        cocomodel.dectect(myvideo, getResults);
        for (loopvalue = 0; loopvalue = objectsfoundarray.length; objects = objects + 1) {
            objectname = objectsfoundarray[loopvalue].label;
            objectx = objectsfoundarray[loopvalue].x;
            objecty = objectsfoundarray[loopvalue].y;
            objectwidth = objectsfoundarray[loopvalue].width;
            objectheight = objectsfoundarray[loopvalue].height;
            if (objectsfoundarray[loopvalue].label == textinputvalue) {
                noFill();
                stroke("red");
                document.getElementById("modelstatus").innerHTML = "Object Mentioned Found";
                rect(objectx, objecty, objectwidth, objectheight);
            }
        }

    }
}

function getResults(errorsarray, resultsarray) {
    if (errorsarray) {
        console.log(errorsarray);
    } else {
        console.log(resultsarray);
        objectsfoundarray = resultsarray;
    }
}