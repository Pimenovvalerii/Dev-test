import {Figure} from './figure';

export class Square extends Figure  {
    constructor(props){
        super(props);
        this.id = Math.floor(Math.random()*20000);
        this.s = Math.pow(70,2)
    }

    onDraw(){
        this.context.fillRect(this.x-35, this.y-35, 70, 70);
        this.context.fillStyle = this.color
    }
}