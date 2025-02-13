import Foundation

func solution(_ a:Int, _ b:Int) -> Int {
    
    let firstCase = Int(String(a) + String(b))!  
    let secondCase = 2*a*b
    
    return max(firstCase,secondCase)
}