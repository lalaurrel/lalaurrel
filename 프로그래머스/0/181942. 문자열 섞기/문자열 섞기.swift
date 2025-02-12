import Foundation

func solution(_ str1: String, _ str2: String) -> String {
   var result = ""
    
   let arr1 = Array(str1)
   let arr2 = Array(str2)
   
   for i in 0..<str1.count {
       result += String(arr1[i])
       result += String(arr2[i])
   }
   
   return result
}