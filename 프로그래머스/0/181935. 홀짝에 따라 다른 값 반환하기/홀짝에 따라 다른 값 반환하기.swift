import Foundation

func solution(_ n:Int) -> Int {
    var sum = 0
    
    if n % 2 == 1 { 
        for i in 1...n {
            if i % 2 == 1 {
                sum += i
            }
        }
    } else {  
        for i in 1...n {
            if i % 2 == 0 {
                sum += i * i
            }
        }
    }
    
    return sum
}