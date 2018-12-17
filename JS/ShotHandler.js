class ShotHandler{

    constructor(initialAmmo){
        this.initialAmmo = initialAmmo;
        this.ammo = initialAmmo;
    }

    
    getAmmoNumber(){
        return this.ammo;
    }

    resetAmmo(){
        this.ammo = this.initialAmmo;
        this.changeShootBoxImage();
    }


    checkIfHitSuccessful(ducks){
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let numberOfSuccessfulHits = 0;
        this.ammo--;
        this.changeShootBoxImage();

        for (let index = 0; index < ducks.length; index++) {
            let duck = ducks[index];
            let duckPosition = $(duck.duckId).offset();

            if(this.isShotOnDuck(mouseX,mouseY,duckPosition) && duck.isAlive){
                duck.fallDown();
                numberOfSuccessfulHits++;
                // return here if one hit = one shot
            }   
        }

        //IF COMBO - DISPLAY MESSAGE
        return numberOfSuccessfulHits;
    }


    isShotOnDuck(mouseX,mouseY,duckPosition) {
        let duckX = duckPosition.left;
        let duckY = duckPosition.top;
        let duckWidth = 78;
        let duckHeight = 73;
    
        if ((mouseX>=duckX) && (mouseX <= duckX+duckHeight) && 
            (mouseY >= duckY) && (mouseY <= duckY+duckWidth)){
            return true;
        }
        return false;
    }


    changeShootBoxImage() {
        if (this.ammo<0) {
            var path = `url('../resources/sprites/scoreImages/shot/shot0.png')`;
            document.getElementById("shots").style.backgroundImage = path;
        }else{
            var path = `url('../resources/sprites/scoreImages/shot/shot${this.ammo}.png')`;
            document.getElementById("shots").style.backgroundImage = path;
        }
    }


    enableShooting(){
        $("#shootBlocker").hide();
    }


    disablehooting(){
        $("#shootBlocker").show();
    }

    
    
    
}