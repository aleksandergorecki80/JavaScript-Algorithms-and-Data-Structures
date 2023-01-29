console.log('AddVertex')

class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        } else {
            console.log(`${vertex} already exists.`)
        }
    }
}

const graph = new Graph()

graph.addVertex('Tokyo')
graph.addVertex('Warszawa')
graph.adjacencyList.Tokyo.push('sth')

graph.addVertex('Tokyo')

console.log(graph)