do {
    var x = +prompt('Enter number')
    alert('Please enter a non-negative integer.')
} while (isNaN(x))

let result = 1
for(let i = 1; i <= x; i++){
    result = result * i
    alert(result) 
}