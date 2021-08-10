import {Shape} from './shape.js';
export class Circle extends Shape{
    constructor(){
        super();
        this.radius=9;
        
       
    }
    calculateArea(){return "Calculated area of circle";}


}