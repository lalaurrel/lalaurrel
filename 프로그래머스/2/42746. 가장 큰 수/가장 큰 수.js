function solution(numbers) {

    numbers.sort((a, b) => (String(b) + String(a)) - (String(a) + String(b)));

    let result = numbers.join('');

    return result[0] === '0' ? '0' : result;
}