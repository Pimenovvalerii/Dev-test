import {Figure} from './figure';

export class Ellipse extends Figure {
    constructor(props){
        super(props);
        this.id = Math.floor(Math.random()*20000);
        this.s =  Math.floor(Math.PI * 40 * 50);
    }

    onDraw(){
        this.context.beginPath();
        this.context.ellipse(this.x, this.y, 40, 50, Math.PI / 2, 0, 2 * Math.PI);
        this.context.fillStyle = this.color;
        this.context.fill();
    }
}