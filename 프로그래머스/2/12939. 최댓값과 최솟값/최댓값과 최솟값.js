function solution(s) {
    var answer = '';
    
    // 문자열을 공백으로 분리해서 배열로 만들고 숫자로 변환
    const numbers = s.split(' ').map(Number);
    
    // 최소값과 최대값 찾기
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    
    // 형식에 맞게 문자열 생성
    answer = min + " " + max;
    
    return answer;
}