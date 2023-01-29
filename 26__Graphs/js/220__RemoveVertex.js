console.log("AddVertex");

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    } else {
      console.log(`${vertex} already exists.`);
    }
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
  }
  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();

graph.addVertex("Tokyo");
graph.addVertex("Warszawa");
graph.addVertex("Krakow");
graph.addVertex("Birmingham");
graph.addVertex("Moskwa");

graph.addVertex("Tokyo");

graph.addEdge("Krakow", "Birmingham");
graph.addEdge("Birmingham", "Warszawa");

graph.addEdge("Birmingham", "Moskwa");
graph.addEdge("Krakow", "Moskwa");
graph.addEdge("Warszawa", "Moskwa");

graph.removeEdge("Warszawa", "Birmingham");

graph.removeVertex("Moskwa");

console.log(graph);


const obj = {
    field1: 'one',
    field2: 'two'
}

console.log(obj)

delete obj.field1

console.log(obj)