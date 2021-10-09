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

// 先序遍历：
// const preorder=(root)=>{
//     if (!root) return;
//     console.log(root.val)
//     preorder(root.left)
//     preorder(root.right)
// }
// preorder(bt) 
// 1 2 4 5 3 6 7

// 顺序是根左右
// 非递归算法：
// 新建栈的数据结构stack，将树的根节点入栈
// 遍历stack，始终取栈最后一个元素，将其右子树和左子树分别入栈；
// 因为栈有先进后出的特点，取值顺序为根左右，故入栈时，要先入栈右子树，以便遍历时优先取到左子树
// 根节点入栈，判断根
const preorder = (root) => {
    if (!root) return;
    const stack=[root]
    while(stack.length){
        const n = stack.pop()
        console.log(n.val)
        // 因为栈先进后出，入栈顺序right、left，以便取值顺位为left、right
        if (n.right) stack.push(n.right);
        if (n.left) stack.push(n.left);
     }
}
preorder(bt)
// 1 2 4 5 3 6 7