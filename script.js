let hsty = []
const input = document.getElementById('input')
const result = document.getElementById('result')
const formula = document.getElementById('formula')
const add = (e) =>{
    input.value += e.value
    input.focus()
}
const clear = () => {
    input.value = ''
    input.focus()
}
const updateres = (value) => {
    result.innerHTML=value
    input.focus()
}
const updatefor = (value) => {
    formula.innerHTML=value
    input.focus()
}
const calc = () => {
    const f = new Function('return '+input.value)
    updateres(f().toString())
    updatefor(input.value)
    hsty.push(input.value)
    clear()
    input.focus()
}
let count = 0
let p = 0
const prsetr = (key) => {
    if (key == 13) {
    calc()
    }
    if (key == 38 &&count>0) {
    if (p) {
        p++
        count = hsty.length
    }
    count--
    input.value = hsty[count] 
    }
    if (key == 40 && count < hsty.length-1) {
    count++
    input.value = hsty[count]
    }
}
const del = () => {
    let inp = input.value.split('')
    inp.pop()
    if (inp==[]) {
    return
    } else {
    input.value = inp.join('')
    input.focus()
    }
}
const Ans = () => {
    if (hsty.length==0) {
    return
    } else {
    input.value=`(${hsty.shift()})`
    input.focus()
    }
}
const sine = () => {
    input.value+=`Math.sin(`
    input.focus()
}
const cosine = () => {
    input.value+=`Math.cos(`
    input.focus()
}
const tangent = () => {
    input.value+=`Math.tan(`
    input.focus()
}
const pi = () => {
    input.value+=`Math.PI`
    input.focus()
}
const pm = () => {
    let inp = input.value.split('')
    if (inp[0]!='-') {
        inp.unshift('-')
    } else {
        input.shift()
    }
    input.value=inp.join('')
    input.focus()
}