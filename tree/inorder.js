const bt = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

// 中序遍历
// const inorder=(root)=>{
//     if (!root) return;
//     inorder(root.left)
//     console.log(root.val)
//     inorder(root.right)
// }
// inorder(bt)
// 4 2 5 1 6 3 7

// 非递归算法
const inorder = (root) => {
    if (!root) {return;}
    const stack = [];
    let p = root
    while (stack.length || p) {
        // 入栈left元素 1 2 4
        while (p) {
            stack.push(p)
            p = p.left;
        }

        const n = stack.pop()
        console.log(n.val) 
        p = n.right 
    }
}
inorder(bt)
// 入栈 1 2 4 [1,2,4]
// 出栈 4 [1,2]

// 右->3  入栈 5 [1,2,5]
// 出栈 5 [1,2]
//  右 - >3  


// 4 2 5 1 6 3 7