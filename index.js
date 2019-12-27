import {Circle} from './shapes/circle';
import {Ellipse} from './shapes/ellipse';
import {Triangle} from './shapes/triangle';
import {Square} from './shapes/square';
import {Pentagon} from './shapes/pentagon';
import {Hexagon} from './shapes/hexagon';
import {Counter} from './counter';

const shapes = [Hexagon,Pentagon,Square,Triangle,Ellipse,Circle];

class App {

    constructor(arrayShapes){
        this.canvas = document.querySelector('canvas');
        this.context = canvas.getContext('2d');
        this.arrayShapes = arrayShapes;
        this.arrayShapesDisplayed = [];
        
        this.gravInc = document.getElementById('grav__inc');
        this.gravDec = document.getElementById('grav__dec');
        this.gravityText = document.getElementById('gravity__text');
        this.gravityValue = 1;

        this.shapeInc = document.getElementById('shape__inc');
        this.shapeDec = document.getElementById('shape__dec');
        this.shapeText = document.getElementById('shape__text');
        this.shapeValueDisplayed = 1;
        this.shapeValue = 1000;
        this.shapeInterval = null;

        this.counter = new Counter({
            element: document.getElementById('shapes-displayed')
        });
        this.areaElements = document.getElementById('area-elements')
        
    }

    setTime(time = 1000){

        this.shapeValue = time < 0 ? 0 : time;
        clearInterval(this.shapeInterval);

        this.shapeInterval =  setInterval(()=>{
            this.createElement();
        } ,this.shapeValue)
        
    }

    handelTimeInc(time = 1000){
        return ()=>{
            this.shapeValueDisplayed += 1;
            const newTime = this.shapeValue + time;
            this.setTime(newTime);
        }
    }

    handelTimeDec(time = 1000){ 
        return ()=>{
            this.shapeValueDisplayed -= 1;
            const newTime = this.shapeValue + time;
            this.setTime(newTime);
        }
    }

    controler(){

        this.counter.update(this.arrayShapesDisplayed.length);
        this.gravityText.textContent = this.gravityValue; 
        this.shapeText.textContent = this.shapeValueDisplayed ;

        if(this.gravityValue === 0 ){
            this.gravDec.setAttribute('disabled','disabled')
        } else {
            this.gravDec.removeAttribute('disabled');
        };

        if(this.shapeValueDisplayed === 0 ) {
            this.shapeDec.setAttribute('disabled','disabled')
        } else {
            this.shapeDec.removeAttribute('disabled');
        };

        this.arrayShapesDisplayed.filter( (el,inx) => {
            if(el.y > 430){
                this.arrayShapesDisplayed.splice(inx,1)
            };
        });
        
    }

    handleClick(e){
        let x = e.layerX;
        let y = e.layerY;
        let addElem = true;

        this.arrayShapesDisplayed.forEach( (element,idx) =>{
            
            if (y > element.y-35  && y < element.y +35
                && x > element.x-35 && x < element.x + 35 ) {
                    
                this.arrayShapesDisplayed.splice(idx,1)
            } else {
                if(addElem){
                    this.createElement(x,y);
                    addElem = false;
                };
            };
        });  
    }

    createElement(x ,y = -50){
        let element = this.arrayShapes[Math.floor(Math.random()*this.arrayShapes.length)];
    
        if(x == undefined){
            x = ~~( (Math.random()*500)+50);
        };
        
        this.arrayShapesDisplayed.push( new element( { x, y, context: this.context }));
    }

    areaFigures(){

        const areaAll = this.arrayShapesDisplayed.reduce( (el,nextel) => {
            return el + nextel.s
        },0);
 
        this.areaElements.textContent = areaAll;
    }

    animate(){

        this.controler();
        this.areaFigures();
        requestAnimationFrame(this.animate.bind(this));
        this.context.clearRect(0,0,600,400);

        for (let i = 0; i < this.arrayShapesDisplayed.length; i++){
            try {  
                this.arrayShapesDisplayed[i].move(this.gravityValue);
            } catch (error){
                console.warn('проблема с фигурой', error);
            };
        };
    }

    start(){
        this.canvas.addEventListener('click',this.handleClick.bind(this));
        this.gravInc.addEventListener('click',()=>{ this.gravityValue += 1 })
        this.gravDec.addEventListener('click',()=>{ this.gravityValue -= 1 })
        this.shapeInc.addEventListener('click', this.handelTimeInc(-100));
        this.shapeDec.addEventListener('click', this.handelTimeDec(100));
        
        this.animate();
        this.setTime();
    }
}



const app = new App(shapes)
app.start();

