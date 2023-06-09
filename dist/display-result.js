import { promptData } from "./data/prompt-data.js";
class DisplayResult {
    constructor(promptData) {
        this.promptData = promptData;
        this.bmi = document.querySelector('.bmi-index');
        this.prompt = document.querySelector('.prompt');
    }
    ;
    choosePrompt(bmi, promptData) {
        let prompt;
        switch (true) {
            case (+bmi < 18.5):
                prompt = promptData.underweight;
                this.prompt.style.color = 'grey';
                break;
            case (+bmi > 18.5 && +bmi < 24.9):
                prompt = promptData.normal;
                this.prompt.style.color = 'green';
                break;
            case (+bmi > 25 && +bmi < 29.9):
                prompt = promptData.overweight;
                this.prompt.style.color = 'orange';
                break;
            case (+bmi >= 30):
                prompt = promptData.obesity;
                this.prompt.style.color = 'red';
                break;
        }
        return prompt;
    }
    displayBMIIndex(bmi) {
        document.querySelector('.result-container').classList.add('enable');
        this.bmi.innerText = `${bmi} kg/m2`;
        const prompt = this.choosePrompt(bmi, this.promptData);
        if (typeof prompt === 'string') {
            this.prompt.innerHTML = prompt;
        }
    }
    ;
}
;
export const displayResult = new DisplayResult(promptData);
