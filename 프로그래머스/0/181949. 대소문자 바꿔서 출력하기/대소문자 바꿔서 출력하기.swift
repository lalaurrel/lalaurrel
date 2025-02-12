let str = readLine()!
var result = ""

for char in str{
    if char.isUppercase{
        result += char.lowercased()
    }
    else {
        result += char.uppercased()
    }
}

print(result)

