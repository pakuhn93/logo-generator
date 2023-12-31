// holds the generated SVG code
class SVG {
    constructor(){
        this.shapeEl = '';
        this.textEl = '';
    }
    
    setShape(shape){
        this.shapeEl = shape;
    }

    setText(text, color){
        this.textEl = `<text x="108" y="115" font-size="50" fill="${color}">${text}</text>`;
    }

    render(){ 
        return `<svg width="300" height="200"> \n\t${this.shapeEl} \n\t${this.textEl} \n</svg>`;
    }
}

module.exports = SVG;