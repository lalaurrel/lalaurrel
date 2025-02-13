import Foundation

func solution(_ num_list:[Int]) -> Int {
    var multiply = 1
    var sum = 0
    
    for num in num_list {
        multiply *= num 
        sum += num     
    }
    
    return multiply < sum * sum ? 1 : 0
}