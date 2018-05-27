var should = require('should');
function add() {
    let sum = 0;
    sum = Array.from(arguments).reduce((previousValue, currentValue) => {
        previousValue += currentValue*1;
        return previousValue
    } ,sum)
  // 实现该函数
    return {
        should:{
            equal(value){
                should.equal(value,sum+'')
            }
        }
    }
}
module.exports = add