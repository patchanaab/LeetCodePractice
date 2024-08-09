/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cached = {}
    return function(...args) {
        const value = JSON.stringify(args);
        if(value in cached){
            return cached[value]
        }
        cached[value] = fn(...args);
        return cached[value];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */