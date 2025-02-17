function solution(s) {
    let stack = [];

    for (let char of s) {
        if (char === '(') {
            stack.push(char);
        } else { //')'인 경우
            if (stack.length === 0) {
                return false;  // 스택이 비어있는데 ')'가 나오면 짝궁이 스택에 없는 거니까 false
            }
            stack.pop();
        }
    }

    if (stack.length === 0) {
        return true; // 스택이 비어있어야 모든 괄호가 짝꿍이 있는 것
    } else {
        return false;
    }
}
