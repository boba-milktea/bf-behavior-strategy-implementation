const passingObj = (arr) => arr.filter(obj => obj.pass === true)
const result = passingObj( [ { hello: 'hello' }, { bye: false }, { pass: true },{ passing: 'yes' } ] );
console.log(result)