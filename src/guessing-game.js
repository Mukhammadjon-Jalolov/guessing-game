class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min + 1;
        this.max = max;
    }

    guess() {
        this.initial = Math.floor((this.max + this.min)/2);
        return this.initial;
    }

    lower() {
        this.max = this.initial;
    }

    greater() {
        this.min = this.initial + 1;
    }
}

module.exports = GuessingGame;
