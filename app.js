// voeg controls toe (teleport & WASD controls)
const controls = new Controls(200);
controls.enableMovement();

// create a model
const melkMeisje = new Model('assets/models/vermeer/export_museumprops.babylon.gltf');
melkMeisje.setPosition(7.620, 0.104, 4.759);
melkMeisje.setScale(100, 100, 100);
melkMeisje.setRotation(0.000, -103.19, 0.000);

// create a model
const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(-1.827, 0.000, -0.427);
cuberoom.setScale(-2.636, 14.720, 1.485);
cuberoom.setRotation(0.0, -36.950, 0.0);

// create some text
const lamText = new Text('Lisse Art Museum');
lamText.setPosition(-2.241, 5.149, 8.426);
lamText.setFontsize(50);
lamText.setScale(0.5, 0.5, 0.5)
lamText.setRotation(0, -218, 0);

//Folkert text
const lamText1 = new Text('Folkert de Jong --->');
lamText1.setPosition(-0.789, 1.189, 8.107);
lamText1.setRotation(-0.76, -216.95, 0);
lamText1.setScale(2.5, 2.5, 2.5);

//melkMeisje text
const lamText2 = new Text('Het MelkMeisje');
lamText2.setPosition(7.573, 2.750, 5.155);
lamText2.setFontsize(4);
lamText2.setRotation(-0.76, -128.16, 0);
lamText2.setScale(2.5, 2.5, 2.5);

//Backdrop
const Backdrop = new XRImage('assets/images/board.jpg');
Backdrop.setPosition(-5.919, 2.495, 4.999);
Backdrop.setRotation(-0.76, -36.95, 0);
Backdrop.setScale(15.911, 3.501, 1.488);

//Folkert de Jong
const Folkert = new XRImage('assets/fotos_kunstwerk_en_atelier_Folkert/Folkert de Jong portret.jpg');
Folkert.setPosition(-1.508, 2.510, 8.107);
Folkert.setRotation(-0.76, -36.95, 0);
Folkert.setScale(2.389, 2.389, 2.389);

// create an image
const image1 = new XRImage('assets/images/Lisse-049.jpg');
image1.setPosition(-13.951, 2.056, -3.035);
image1.setRotation(-0.74, 43, 178);
image1.setScale(1.5, 1.5, 1.5);

// create an image
const image2 = new XRImage('assets/images/FolkertdeJong.jpg');
image2.setPosition(-5.701, 9.191, 5.545);
image2.setRotation(-0.76, -36.95, 0);
image2.setScale(6.445, 6.445, 6.445);

// create an image
const image3 = new XRImage('assets/images/Lisse-043.jpg');
image3.setPosition(-5.148, 2.382, 5.102);
image3.setRotation(-0.76, -36.95, 0);
image3.setScale(2.581, 2.581, 2.581);

// create an image
const image4 = new XRImage('assets/fotos_kunstwerk_en_atelier_Folkert/1c450880dcd514ee-jc_130925_MIDD_FDJ_02.jpg');
image4.setPosition(-9.398, 3.850, -8.723);
image4.setRotation(0, -127, 0);
image4.setScale(3.276, 3.276, 3.276);

// Window
const image5 = new XRImage('assets/images/Glass_Window.jpg');
image5.setPosition(9.349, 5.292, 6.300);
image5.setRotation(0, -127, 0);
image5.setScale(10.294, 10.294, 10.294);

// Window2
const image6 = new XRImage('assets/images/Glass_Window.jpg');
image6.setPosition(-11.457, 5.139, -9.338);
image6.setRotation(0, -127, 0);
image6.setScale(12.195, 12.195, 12.195);

//image7
const image7 = new XRImage('assets/fotos_kunstwerk_en_atelier_Folkert/9CE526DB-B762-4886-B3A4-CE7735FB4FD4.JPG');
image7.setPosition(-9.224, 2.382, 2.059);
image7.setRotation(-0.76, -36.95, 0);
image7.setScale(2.581, 2.581, 2.581);



// create a 360 image
const image360 = new Sky('assets/LamIngang.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-0.327, 16.977, -3.586);
spotLight.setTarget(cuberoom);

// listen for an event
image1.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk ‘Food Chain Project’ van kunstenaar Itamar Gilboa.");
image1.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
image2.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Werkplaats van kunstenaar Folkert de Jong");
image2.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
image3.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk van kunstenaar Sabine Tol");
image3.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");

melkMeisje.addEventListener('click', () => 
    document.getElementById('extraText').innerHTML = "Melkmeisje van Vermeer");