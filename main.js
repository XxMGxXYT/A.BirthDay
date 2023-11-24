let test = document.getElementById("test")
let msg = document.getElementById("msg")
let cube = document.querySelectorAll(".cube")
let rightCube = document.querySelector(".correct")
let cong = document.querySelectorAll(".cong")

// Check the user personality
let correctPass = "00!000000!"
// Check the password
function theGate(){
    let prom = prompt("Please, enter your code:")
    // if prom == the right code
    if(prom === correctPass){
        alert("Welcome Alaa :)")
    }
    // if prom == cancel or empty or another code
    else {
        return theGate()
    }
}
// Call the function
theGate()

// Disappering function
function Disappering(id){
    id.classList.add("hide")
    setTimeout(() => {
        id.classList.add("none")
    }, 1000)
}

// Appering function
function Appering(id){
    id.classList.remove("none")
    setTimeout(() => {
        id.classList.remove("hide")
    }, 1500)
}

// Wrong cube choosen
cube.forEach(function(e){
    e.addEventListener("click", () =>{
        if(e.classList.contains("correct")){
            e.classList.add("greenShadow")
            e.classList.add("none_click")
            document.getElementById("win").play()
            cong.forEach((c) =>{
                c.classList.remove("none")
            })
            setTimeout(() =>{
                Disappering(test)
            }, 1000)
            setTimeout(() => {
                Appering(msg)
            }, 2000)
        } else{
            e.classList.add("redShadow")
            setTimeout(() =>{
                e.classList.remove("redShadow")
            }, 700)
            setTimeout(() =>{
                e.classList.add("hide")
            }, 700)
            e.classList.add("none_click")
            document.getElementById("boo").play()
        }
    })
})