class Project {
    constructor(title, description){
        this.title = title;
        this.description = description;
    }

    buildTemplate() {
        return `<h3>${this.title}</h3>
                <p>${this.description}</p>`
    }
    static AddFeatureToProject(a, b){
        return `This project is called: ${a.title}`
    }    
}

let tickTakToe = new Project('Tic Tac Toe', 'Classic board game');
let battleShip = new Project('Battle Ship', 'Another classic board game. Battelship');

console.log(Project.AddFeatureToProject(tickTakToe, battleShip))