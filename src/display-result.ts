import { promptData } from "./data/prompt-data.js";
import { PromptData } from "./interfaces/prompt-data.js";

class DisplayResult {
    private promptData: PromptData;
    private bmi: HTMLSpanElement;
    private prompt: HTMLParagraphElement;

    constructor(promptData: PromptData) {
        this.promptData = promptData;
        this.bmi = document.querySelector('.bmi-index')! as HTMLSpanElement;
        this.prompt = document.querySelector('.prompt')! as HTMLParagraphElement;
    };

    private choosePrompt(bmi: string, promptData: PromptData): string | undefined {
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

    displayBMIIndex(bmi: string) {
        (document.querySelector('.result-container')! as HTMLElement).classList.add('enable');
        this.bmi.innerText = `${bmi} kg/m2`;
        const prompt = this.choosePrompt(bmi, this.promptData);
        if (typeof prompt === 'string') {
            this.prompt.innerHTML = prompt;
        }
    };
};

export const displayResult = new DisplayResult(promptData);