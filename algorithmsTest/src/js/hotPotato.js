import Queue from '../data-structures/Queue.js'
function hotPotato(elementsList, num) {
    const queue = new Queue();
    const elimitatedList = [];
    elementsList.forEach((item) => {
        queue.enqueue(item);
    })
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()); // {3}
        }
        elimitatedList.push(queue.dequeue()); // {4}
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue() // {5}
    };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);