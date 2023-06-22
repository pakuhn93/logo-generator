class SVG {
    constructor(){
        this.textEl = '';
        this.shapeEl = '';
    }
    
    setShape(shape){
        this.shapeEl = shape;
    }

    setText(text){
        this.textEl = text;
    }

    render(){ 
        return `<svg width="300" height="200"> \n\t${shapeEl} \n\t${textEl} \n</svg>`;
    }
}