// 邻接表
const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3],
}
const visited = new Set() //访问过的节点
visited.add(2)
const q=[2]
while (q.length) {
    const n = q.shift()
    console.log(n)
    graph[n].forEach(c => {
        if (!visited.has(c)) {
            q.push(c)
            visited.add(c)
        }
    });
}

// 2 0 3 1 