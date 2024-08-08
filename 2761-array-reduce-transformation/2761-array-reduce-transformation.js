/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init;
    // nums.forEach((n)=>{
    //     result = fn(result, n)
    // })

    // return nums.reduce(fn, init); 
    
    for(const n of nums){
        result = fn(result, n)
    };
    return result;
    
};