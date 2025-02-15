import Foundation

func solution(_ a:Int, _ d:Int, _ included:[Bool]) -> Int {
    var sum = 0
    
    for (index, isIncluded) in included.enumerated() {
        if isIncluded {
            let term = a + (index * d)
            sum += term
        }
    }
    
    return sum
}