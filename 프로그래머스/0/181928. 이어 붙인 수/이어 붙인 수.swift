import Foundation

func solution(_ num_list:[Int]) -> Int {
    var oddStr = ""
    var evenStr = ""
    
    for num in num_list {
        if num % 2 == 0 {
            evenStr += String(num)  
        } else {
            oddStr += String(num)   
        }
    }
    
    return Int(oddStr)! + Int(evenStr)!
}