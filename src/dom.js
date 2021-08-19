window.dom = {
    find(selector, scope){
        return (scope || document).querySelectorAll(selector)
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                // 如，代码为 dom.style(div, 'color') 读取style的属性值
                return node.style[name]
            } else if (name instanceof Object) {
                // 输入多个属性时，dom.style(div, {color: 'red'， background: 'black'})
                const object = name
                for(let key in object){
                    node.style[key] = object[key]
                }
            }
        }
        
    },
    each(nodeList, fn){
        for (let i = 0; i < nodeList.length; i++){
            fn.call(null, nodeList[i])
        }
    },
}