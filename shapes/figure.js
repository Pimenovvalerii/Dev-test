import {randomColor} from '../random-color';

export class Figure {
    constructor({ y = 0, x = 0, color = randomColor(), context = null }={}){
        this.y = y;
        this.x = x;
        this.color = color;
        this.context = context;
    }
    draw(){
        if(this.context === null){
            throw Error('забыл передать контекст');
        }
        this.onDraw();
    }
    
    onDraw(){
        throw Error('определи этот метод');
    }

    move(y = 0){
        this.y += y;
        this.draw();
    }
}