// Игра угадать число
// Стратегия 50/50
class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 1;
    }
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    guess() {
        return this.average();
    }
    lower() {
        this.max = this.average();
    }
    greater() {
        this.min = this.average();
    }
    average() {
        return Math.ceil((this.max+this.min)/2);
    }
}

module.exports = GuessingGame;