/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.reduce((acc, args)=>{
        return acc = acc+1
    },0)
    // return args.length; //another way

};

/**
 * argumentsLength(1, 2, 3); // 3
 */