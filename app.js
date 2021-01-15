// voeg controls toe (teleport & WASD controls)
const controls = new Controls(200);
controls.enableMovement();

// create a model
const melkMeisje = new Model('assets/models/vermeer/export_museumprops.babylon.gltf');
melkMeisje.setPosition(-9.057, 0.104, -0.139);
melkMeisje.setScale(100, 100, 100);
melkMeisje.setRotation(0.000, 153.27, 0.000);

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
const lamText1 = new Text('Folkert de Jong (Schilder)');
lamText1.setPosition(-0.789, 1.189, 8.107);
lamText1.setRotation(-0.76, -216.95, 0);
lamText1.setScale(2.5, 2.5, 2.5);

//Backdrop
const Backdrop = new XRImage('assets/images/board.jpg');
Backdrop.setPosition(-5.919, 2.495, 4.999);
Backdrop.setRotation(-0.76, -36.95, 0);
Backdrop.setScale(15.911, 3.501, 1.488);

//floor
// const Floor = new XRImage('assets/images/Floor.svg');
// Floor.setPosition(-5.808, 0.013, -3.035);
// Floor.setRotation(-90.00, -36.95, 0);
// Floor.setScale(35.611, 15.245, 1.5);

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
image3.setPosition(9.233, 5.459, 6.483);
image3.setRotation(0, -127, 0);
image3.setScale(5.456, 5.456, 5.456);

// create an image
const image4 = new XRImage('assets/fotos_kunstwerk_en_atelier_Folkert/1c450880dcd514ee-jc_130925_MIDD_FDJ_02.jpg');
image4.setPosition(-9.398, 5.850, -8.723);
image4.setRotation(0, -127, 0);
image4.setScale(3.276, 3.276, 3.276);


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