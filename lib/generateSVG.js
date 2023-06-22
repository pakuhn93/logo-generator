const fs = require('fs');
const SVG = require('./SVG');
const {Circle, Square, Triangle} = require('./shapes');

// generates the SVG code and writes it to an SVG file
const generateSVG = ({text, textColor, shape, shapeColor}) => {
    const fileName = 'logo.svg';
    const mySVG = new SVG();
    mySVG.setText(text, textColor.toLowerCase().replace(/\s/g, ''));
    let myShape;

    switch(shape){
        case 'Circle':
            myShape = new Circle(shapeColor.toLowerCase().replace(/\s/g, ''));
            break;

        case 'Square':
            myShape = new Square(shapeColor.toLowerCase().replace(/\s/g, ''));
            break;
            
        case 'Triangle':
            myShape = new Triangle(shapeColor.toLowerCase().replace(/\s/g, ''));
            break;

        default:
            console.log(`\nAn error has occurred, please try again.`);
            break;
    }

    mySVG.setShape(myShape.render());

    fs.writeFile(fileName, mySVG.render(), (err) => {
        if(err){ 
            console.log('\nAn error occurred when writing your file, please try again.')
        } else { console.log(`\'${fileName}\' has successfully been created.`)};
    });
}

module.exports = {generateSVG};