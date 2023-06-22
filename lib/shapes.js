class Shape{
    constructor(color){
        this.color = color;
    }
}

class Circle extends Shape{

    setColor(color){
        this.color = color;
    }

    render(){
        return `<circle cx="150" cy="100" r="75" fill="${this.color}"/>`;
    }
}

class Square extends Shape{
    setColor(color){
        this.color = color;
    }

    render(){
        return `<rect width="150" height="100" x="75" y="50" style="fill:${this.color}"/>`;
    }
}

class Triangle extends Shape{
    setColor(color){
        this.color = color;
    }

    render(){
        return `<polygon points="60,150 150,20 240,150" style="fill:${this.color}"/>`;
    }
}

module.exports = {
    Shape, Circle, Square, Triangle
}