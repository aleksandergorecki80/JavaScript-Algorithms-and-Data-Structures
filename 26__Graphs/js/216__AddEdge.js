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
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
}

const graph = new Graph()

graph.addVertex('Tokyo')
graph.addVertex('Warszawa')
graph.addVertex('Krakow')
graph.addVertex('Birmingham')
graph.addVertex('Moskwa')


graph.addVertex('Tokyo')

graph.addEdge('Krakow', 'Birmingham')
graph.addEdge('Birmingham', 'Warszawa')

console.log(graph)