import {Figure} from './figure';

export class Pentagon extends Figure {
    constructor(props){
        super(props)
        this.figureSize = 40;
        this.numberOfSides = 5;
        this.step  = 2 * Math.PI / this.numberOfSides;
        this.shift = (Math.PI / 180.0) * -18;
        this.id = Math.floor(Math.random()*20000);
        this.s = Math.floor((Math.sqrt(25+20 * Math.sqrt(5)) / 4) * Math.pow(40,2));  
    }
    onDraw(){

        this.context.beginPath();
                
        for (var i = 0; i <= this.numberOfSides;i++) {
            var curStep = i * this.step + this.shift;
            this.context.lineTo (this.x + this.figureSize * Math.cos(curStep), this.y + this.figureSize * Math.sin(curStep));
        }
        this.context.fillStyle = this.color;
        this.context.fill();

    }
}