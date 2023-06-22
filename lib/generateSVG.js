const fs = require('fs');
const SVG = require('./SVG.js');
const shapes = require('./shapes');

const generateSVG = ({text, textColor, shape, shapeColor}) => {
    const logoWidth = 300;
    const logoHeight = 200;
    const logoX = Math.floor(logoWidth/2); //center X | used as midpoint for triangle
    const logoY = Math.floor(logoHeight/2); //center Y | used as radius for circle (so it's not too big for its container)
    const logoTemplateText = `<text x="108" y="115" font-size="50" fill="${textColor}">${text}</text>`;
    const logoTemplateCircle = `<svg width="${logoWidth}" height="${logoHeight}"><circle cx="${logoX}" cy="${logoY}" r="${logoY}" fill="${shapeColor}" />${logoTemplateText}</svg>`;
    const logoTemplateSquare = `<svg width="${logoWidth}" height="${logoHeight}"><rect width="${logoX}" height="${logoY}" x="75" y="50" style="fill:${shapeColor}" />${logoTemplateText}</svg>`;
    let [tri1, tri2, tri3] = ["60,150", "150,20", "240,150"]; //triangle points
    const logoTemplateTriangle = `<svg width="${logoWidth}" height="${logoHeight}"><polygon points="${tri1} ${tri2} ${tri3}" style="fill:${shapeColor}"/>${logoTemplateText}</svg>`;

    const fileName = 'logo.svg';

    switch(shape){
        case 'Circle':
            fs.writeFile(fileName, logoTemplateCircle, (error) => {
                error ? console.log(error) : console.log(`${fileName} created successfully`);
            });
            break;
        case 'Square':
            fs.writeFile(fileName, logoTemplateSquare, (error) => {
                error ? console.log(error) : console.log(`${fileName} created successfully`);
            });
            break;
        case 'Triangle':
            fs.writeFile(fileName, logoTemplateTriangle, (error) => {
                error ? console.log(error) : console.log(`${fileName} created successfully`);
            });
            break;
        default:
            console.log(`An error has occurred, please try again.`);
            break;
    }
    // let mySVG = new SVG();
    // let myShape;
    // switch(shape){
    //     case 'Circle':
    //         myShape = new Circle(shapeColor);
    //         mySVG.setShape(myShape.render());
    //         mySVG.setText(text, color);
    // }

}

module.exports = {generateSVG};