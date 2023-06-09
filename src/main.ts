import { displayResult } from "./display-result.js";

class BMIIndexCalculation {
    private heightInput: HTMLInputElement;
    private weightInput: HTMLInputElement;
    private calculateBtn: HTMLButtonElement;
    private clearInputsBtn: HTMLButtonElement;
    private regExp: RegExp;

    constructor() {
        this.heightInput = document.getElementById('height-input')! as HTMLInputElement;
        this.weightInput = document.getElementById('weight-input')! as HTMLInputElement;
        this.calculateBtn = document.querySelector('.calculate-bmi')! as HTMLButtonElement;
        this.clearInputsBtn = document.querySelector('.clear-inputs')! as HTMLButtonElement;
        this.regExp = new RegExp(/[0-9]/, 'g');
        this.calculateBtn.addEventListener('click', () => this.calculateBMIIndex(this.weightInput.value, this.heightInput.value));
        this.clearInputsBtn.addEventListener('click', this.clearInputs.bind(this));
    };

    private validateInputs(weight: string, height: string) {
        const checkForEmptyInput = (weight === '' || height === '');
        const checkForMatching = !weight.match(this.regExp) && !height.match(this.regExp);
        if (checkForEmptyInput) {
            alert('At least one input has an empty field!!!');
            return;
        } else {
            if (checkForMatching) {
                alert('Input must be a digit!');
                return;
            };
        };
        return true;
    }

    private getBMIIndex(weight: string, height: string): string {
        const newHeight = (parseInt(height) / 100) * 2;
        const bmi = (+weight / newHeight).toFixed(2);
        return bmi;
    }

    private calculateBMIIndex(weight: string, height: string) {
        if (this.validateInputs(weight, height)) {
            const bmi = this.getBMIIndex(weight, height);
            displayResult.displayBMIIndex(bmi);
        }
    };

    private clearInputs() {
        this.heightInput.value = '';
        this.weightInput.value = '';
    };
};

new BMIIndexCalculation();