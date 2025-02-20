function solution(s) {
    // 소문자로 바꾸고 공백을 기준으로 단어 분리
    let words = s.toLowerCase().split(' ');
    
    // 단어의 첫 글자를 대문자로 변환
    let jadenCase = words.map(word => {
        // 빈 문자열이면 그냥 반환
        if (word === '') return '';
        
        // 첫 글자와 나머지 분리
        let firstChar = word.charAt(0);
        let restChars = word.slice(1);
        
        // 첫 글자가 알파벳인 경우만 대문자로
        if (firstChar.match(/[a-z]/)) {
            firstChar = firstChar.toUpperCase();
        }
        
        return firstChar + restChars;
    });
    
    return jadenCase.join(' ');
}