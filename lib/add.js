var should = require('should');
const add = (x, y) => {
	x = '' + x;
	y = '' + y;

	if (/\D/.test((x + y))) {
		return NaN;
	}

	let output = '';
	let carry = '';
	let zero = '0000000000000000000000';

	const split = (str) => (zero + str).split(/(?=\d{14}$)/);
	const remove_left_zero = (str) => ('' + str).replace(/^0+/, '');

	while (x.length > 0 || y.length > 0 || carry.length > 0) {
		let tx = split(x);
		let ty = split(y);
		let ta = split(parseInt(tx[1] || 0, 10) + parseInt(ty[1] || 0, 10) + parseInt(carry || 0, 10));
		output = ta[1] + output;
		carry = ta[0];
		x = remove_left_zero(tx[0]);
		y = remove_left_zero(ty[0]);
		carry = remove_left_zero(carry);
	}

	return remove_left_zero(output);
}
// function add() {
//     let sum = 0;
//     sum = Array.from(arguments).reduce((previousValue, currentValue) => {
//         previousValue += currentValue*1;
//         return previousValue
//     } ,sum)
//   // 实现该函数
//     return {
//         should:{
//             equal(value){
//                 should.equal(value,sum+'')
//             }
//         }
//     }
// }
module.exports = add