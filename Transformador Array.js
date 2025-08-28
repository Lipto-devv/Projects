var map = function(arr, fn) {
    let result = [];

    for (let plusOne = 0; plusOne< arr.length; plusOne++) {
        let expectedResult = fn(arr[plusOne], plusOne);
        result.push(expectedResult);
    }
    return result;
};
function plusOne(n){
        return n+1;
}
    console.log(map([1,2,3],plusOne));

function plusI(n,i) {
    return n+i;
}
console.log(map([1,2,3],plusI));