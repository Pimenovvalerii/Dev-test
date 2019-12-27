import {Figure} from './figure';

export class Circle extends Figure {
    constructor(props){
        super(props);
        this.id = Math.floor(Math.random()*20000);
        this.s = Math.floor(Math.PI * Math.pow(40,2));
    }

    onDraw(){
        this.context.beginPath();
        this.context.arc(this.x, this.y, 40, 0, Math.PI*2, false);
        this.context.fillStyle = this.color;
        this.context.fill();
    }
}