export class Counter {
    constructor({element = null,counter = 0}={}){
        this.element = element;
        this.counter = counter;
    }

    update(numb){
        if(!this.element){
            return;
        }
        
        this.counter = numb < 0 ? 0 : numb;
        this.element.textContent = this.counter;
    }
}