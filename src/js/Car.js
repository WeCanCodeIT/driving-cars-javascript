class Car {

    constructor() {
        this._engineHealth = 100;
        this._speed = 0;
    }

    accelerate() {
        this._speed += 10;
        this.checkForEngineDamage();
    }

    brake(){
        this._speed -= 10;
        if(this._speed<0){
            this._speed = 0;
        }
        this.checkForEngineDamage();
    }
    checkForEngineDamage(){
        if (this._speed > 60) {
            this.takeEngineDamage();
        }
    }
    takeEngineDamage() {
        this._engineHealth -= 10;
        if (this._engineHealth < 0) {
            this._engineHealth = 0;
        }
    }
    get engineHealth() {
        return this._engineHealth;
    }
    get speed() {
        return this._speed;
    }
}

export { Car }