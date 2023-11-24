let test = document.getElementById("test")
let msg = document.getElementById("msg")
let cube = document.querySelectorAll(".cube")
let rightCube = document.querySelector(".correct")
let cong = document.querySelector(".cong")

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
    // Adding "Visibility" to the element => visibility: hidden;
    id.classList.add("hide")
    // Adding "none" to the element => display: none;
    setTimeout(() => {
        id.classList.add("none")
    }, 1000)
}

// Appering function
function Appering(id){
    // Removing "none" from the element => display: none;
    id.classList.remove("none")
    // Removing "Visibility" from the element => visibility: hidden;
    setTimeout(() => {
        id.classList.remove("hide")
    }, 1500)
}

// Wrong cube choosen
cube.forEach(function(e){
    // Adding click event for each cube
    e.addEventListener("click", () =>{
        // if the correct cube
        if(e.classList.contains("correct")){
            // Adding green color to the cube
            e.classList.add("greenShadow")
            // Make the cube non clickable
            e.classList.add("none_click")
            // Winning sound effect
            document.getElementById("win").play()
            // Remove the display: none; from the cong.gif
            cong.classList.remove("none")
            // Calling Disappering function after 1 second
            setTimeout(() =>{
                Disappering(test)
            }, 1000)
            // Calling Appering function after 2 seconds
            setTimeout(() => {
                Appering(msg)
            }, 2000)
            // Removing the cong.gif after 5 seconds
            setTimeout(() => {
                document.getElementById("cong").remove()
            }, 5000)
        // if not the correct cube
        } else{
            // Adding red color to the cube
            e.classList.add("redShadow")
            // Removing red color of the cube after 700 mill Seconds
            setTimeout(() =>{
                e.classList.remove("redShadow")
            }, 700)
            // Make the cube disappering
            setTimeout(() =>{
                e.classList.add("hide")
            }, 700)
            // Make the cube non clickable
            e.classList.add("none_click")
            // Wrong answer sound effect
            document.getElementById("boo").play()
        }
    })
})