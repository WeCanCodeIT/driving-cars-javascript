import {Car} from "/src/js/Car.js"
describe('Car.js should abstract the behaviors of a car:', () => {
    let underTest;
    beforeEach(()=>{
        underTest = new Car();
    })
    describe('A car should instantiate with default values:', () => {

        it('should have a starting speed of 0', () => {
            expect(underTest.speed).toBe(0);
        });
        it('should have a starting engine health of 100', ()=>{
            expect(underTest.engineHealth).toBe(100);
        });
    });

    describe('A car should be able to accelerate, ', () => {
        it('should increase speed by 10 every time accelerate() is called.', ()=>{
            underTest.accelerate();
            expect(underTest.speed).toBe(10);
        });
        it('should damage the engine by lowering engine health by 10 every time accelerate is called with a speed 60 or greater.', ()=>{
           accelerateTo60(underTest)
            underTest.accelerate();
            expect(underTest.engineHealth).toBe(90);
        });
        it('should never lower engine health below 0.', () => {
            for (let i = 0; i < 100; i++) {
                underTest.accelerate();
            }
            expect(underTest.engineHealth).toBe(0);
        });
    });
    describe('A car should be able to brake', () => {
        it('should decrease speed by 10 every time brake() is called.', () => {
            underTest.accelerate();
            underTest.brake();
            expect(underTest.speed).toBe(0);
        });        
        it('should not decrease speed below 0 when brake() is called.', () => {
            underTest.brake();
            expect(underTest.speed).toBe(0);
        });
        it('should prevent damage if it reduces speed to 60.', () => {
            accelerateTo60(underTest);
            underTest.accelerate();
            underTest.brake();
            expect(underTest.engineHealth).toBe(90);
        });
        it('should not stop engine damage if the speed is above 60 after braking.', ()=>{
            accelerateTo60(underTest);
            underTest.accelerate();
            underTest.accelerate();
            underTest.brake();
            expect(underTest.engineHealth).toBe(70);
        });
    });
});

function accelerateTo60(car) {
    for (let i = 0; i < 6; i++) {
        car.accelerate();
    }
}
