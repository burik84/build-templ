function  addToQueue(list, queue) {
    for(let i=0;i<list.length;i++){
        queue.push(list[i])
    }
    return queue;
}

export default addToQueue;