import {
    Car
} from "/src/js/Car.js";

const newCar = new Car();

const updateDashBoard = function (car) {
    const speedometer = document.querySelector(".dashboard__speedometer");
    speedometer.innerText = car.speed;
    console.log(car.engineHealth);

    updateCheckEngineLight(car);

    updateOilPressureLight(car);

    updateAlternatorLight(car);
};

updateDashBoard(newCar);
const accelerator = document.querySelector(".floorboard__accelerator");

accelerator.addEventListener("click", () => {
    newCar.accelerate();
    updateDashBoard(newCar);
});

const brakePedal = document.querySelector(".floorboard__brake");
brakePedal.addEventListener("click", () => {
    newCar.brake();
    updateDashBoard(newCar);
});


function updateAlternatorLight(car) {
    const alternatorLight = document.querySelector(".dashboard__alternator-light");
    alternatorLight.classList.add('hidden');
    if (car.engineHealth <= 0) {
        alternatorLight.classList.toggle('hidden');
    }
}

function updateOilPressureLight(car) {
    const oilPressure = document.querySelector('.dashboard__low-oil-pressure-light');
    oilPressure.classList.add('hidden');
    if (car.engineHealth <= 20) {
        oilPressure.classList.toggle('hidden');
        const accelerator = document.querySelector('.floorboard__accelerator');
        accelerator.disabled = true;

    }
}

function updateCheckEngineLight(car) {
    const checkEngineLight = document.querySelector(".dashboard__check-engine-light");
    checkEngineLight.classList.add('hidden');
    if (car.engineHealth < 80) {
        checkEngineLight.classList.toggle('hidden');
    }
}