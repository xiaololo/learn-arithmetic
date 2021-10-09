const tree = {
    val: 'a',
    children: [
        {
        val: 'b',
        children: [
            {
                val: 'd',
                children: []
            },
            {
                val: 'e',
                children: []
            }
        ]
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: []
                }, {
                    val: 'g',
                    children: []
                }
            ]
        }
    ]
}
const bfs=(root)=>{
    var q=[root];

    // if (root.children.length) {
    //     root.children.forEach((item) => {
    //         arr.push(item)
    //     })
    // }
    while(q.length){
        const fir=q.shift()
        console.log(fir.val)
        fir.children.forEach(child => {
            q.push(child)
        });
    }
}
bfs(tree) 
//a b c d e f g