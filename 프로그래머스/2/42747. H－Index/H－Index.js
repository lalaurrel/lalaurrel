function solution(citations) {
    
    // 내림차순으로 정렬
    citations.sort((a, b) => b - a);
    
    let h = 0;
    
    // 각 인덱스에서 가능한 h값 확인
    for (let i = 0; i < citations.length; i++) {
        
        // 현재 논문보다 인용횟수가 많은 논문의 개수
        const papersAbove = i + 1;
        
        // 현재 논문의 인용횟수
        const currentCitations = citations[i];
        
        // h-index 조건 확인
        if (currentCitations >= papersAbove) {
            h = papersAbove;
        } else {
            break;
        }
    }
    
    return h;
}