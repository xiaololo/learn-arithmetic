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
const dfs=(root)=>{
    console.log(root.val)
    a = root.val
    if (root.children.length) {
        root.children.forEach((item)=>{
            dfs(item)
        })
    }
}
dfs(tree) 
//a b d e c f g

