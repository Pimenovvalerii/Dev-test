import {Figure} from './figure';

export class Triangle extends Figure {
    constructor(props){
        super(props);
        this.height = 40 * Math.cos(Math.PI / 6);
        this.id = Math.floor(Math.random()*20000);
        this.s = Math.floor( 70 * this.height);
    }

    onDraw(){
        this.context.beginPath();
        this.context.moveTo(this.x-35, this.y+35);
        this.context.lineTo(this.x+35, this.y+35);
        this.context.lineTo(this.x, this.y - this.height);
        this.context.closePath();
        this.context.fillStyle = this.color;
        this.context.fill();
    }
}