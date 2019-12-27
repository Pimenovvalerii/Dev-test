import {Figure} from './figure';

export class Hexagon extends Figure {
    constructor(props){
        super(props);
        this.figureSize = 40;
        this.id = Math.floor(Math.random()*20000);
        this.s = Math.floor(((3 * Math.sqrt(3)) / 2 ) * Math.pow(40,2));
    }

    onDraw(){
        this.context.beginPath();
        this.context.moveTo(this.x + this.figureSize * Math.cos(0), 
                            this.y + this.figureSize * Math.sin(0));

        for (let i =0; i <= 6; i++) {
            this.context.lineTo(this.x + this.figureSize * Math.cos(i * 2 * Math.PI / 6), 
                            this.y + this.figureSize * Math.sin(i * 2 * Math.PI / 6));
        }

        this.context.fillStyle = this.color;
        this.context.fill();
    }
}