export default function convertNumber (number: Number) {
    if(!number) return  0
    var str = '';
     let convertNumber = number.toString()
    for(let i = 0; i < convertNumber.length; i++) {
        str += convertNumber[i]
        if((convertNumber.length -1 -i) % 3 === 0 && i !== convertNumber.length-1) {
            str += '.';
        }
    }
    return str
}