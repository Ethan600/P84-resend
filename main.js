canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car1_width= 120;
car1_height= 70;

car1_x= 10;
car1_y= 10;

car2_width= 120;
car2_height= 70;

car2_x = 10;
car2_y= 100;

background_img = "track.png";
car1_img = "car1.png";
car2_img = "car2.png";

function add(){
    bg_img = new Image();
    bg_img.onload = uploadbackground;
    bg_img.src = background_img;

    car1_image = new Image();
    car1_image.onload = uploadcar1;
    car1_image.src = car1_img;
    
    car2_image = new Image();
    car2_image.onload = uploadcar2;
    car2_image.src = car2_img;

}

function uploadbackground(){
    ctx.drawImage(bg_img, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_image, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_image, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed= e.keyCode;
    console.log(keypressed);

    if(keypressed=="38"){
        car1_up();
        console.log("car 1 has moved up");
    }

    if(keypressed=="40"){
        car1_down();
        console.log("car 1 has moved down");
    }
    
    if(keypressed=="37"){
        car1_left();
        console.log("car 1 has moved left");
    }

    if(keypressed=="39"){
        car1_right();
        console.log("car 1 has moved right");
    }

    if(keypressed=="87"){
        car2_up();
        console.log("car 2 has moved up");
    }
 
    if(keypressed=="83"){
        car2_down();
        console.log("car 2 has moved down");
    }
    
    if(keypressed=="65"){
        car2_left();
        console.log("car 2 has moved left");
    }

    if(keypressed=="68"){
        car2_right();
        console.log("car 2 has moved right");
    }
}