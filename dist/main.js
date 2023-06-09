import { displayResult } from "./display-result.js";
class BMIIndexCalculation {
    constructor() {
        this.heightInput = document.getElementById('height-input');
        this.weightInput = document.getElementById('weight-input');
        this.calculateBtn = document.querySelector('.calculate-bmi');
        this.clearInputsBtn = document.querySelector('.clear-inputs');
        this.regExp = new RegExp(/[0-9]/, 'g');
        this.calculateBtn.addEventListener('click', () => this.calculateBMIIndex(this.weightInput.value, this.heightInput.value));
        this.clearInputsBtn.addEventListener('click', this.clearInputs.bind(this));
    }
    ;
    validateInputs(weight, height) {
        const checkForEmptyInput = (weight === '' || height === '');
        const checkForMatching = !weight.match(this.regExp) && !height.match(this.regExp);
        if (checkForEmptyInput) {
            alert('At least one input has an empty field!!!');
            return;
        }
        else {
            if (checkForMatching) {
                alert('Input must be a digit!');
                return;
            }
            ;
        }
        ;
        return true;
    }
    getBMIIndex(weight, height) {
        const newHeight = (parseInt(height) / 100) * 2;
        const bmi = (+weight / newHeight).toFixed(2);
        return bmi;
    }
    calculateBMIIndex(weight, height) {
        if (this.validateInputs(weight, height)) {
            const bmi = this.getBMIIndex(weight, height);
            displayResult.displayBMIIndex(bmi);
        }
    }
    ;
    clearInputs() {
        this.heightInput.value = '';
        this.weightInput.value = '';
    }
    ;
}
;
new BMIIndexCalculation();
