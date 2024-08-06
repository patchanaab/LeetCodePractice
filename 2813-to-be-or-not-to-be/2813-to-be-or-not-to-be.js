/**
 * @param {string | number} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe:(num)=>{
            if(val === num) return true
            else throw new Error("Not Equal")
        },
        notToBe:(num)=>{
            if(val !== num) return true
            else throw new Error("Equal")
        }
    }
};
