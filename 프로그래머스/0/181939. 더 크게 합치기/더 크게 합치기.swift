import Foundation
func solution(_ a:Int, _ b:Int) -> Int {
    
    let firstCase = Int(String(a) + String(b))!  
    let secondCase = Int(String(b) + String(a))!  
    
    return firstCase >= secondCase ? firstCase : secondCase
}