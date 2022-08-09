var value = ""

function getVal(){
    let val = document.querySelector("#number").value
    
    value = val
}

// document.querySelector('#number').addEventListener("keydown", ()=>{
//     let val = document.querySelector("#number").value
//     console.log(val)
// })

// let truncVal = document.querySelector("#number").value.slice(0,4)


function checkVal(val){
    if (val == "0802" || val == "0708" || val == "0808" || val == "0902" || val == "0812" || val=="0902"){
        var img = document.createElement("img")
        var inp = document.querySelector(".sub-image")
        img.src = "/images/airtel-logo.png"
        img.className = "telco-logo"
        img.style.width = "40px"
        img.style.height = "40px"
        inp.appendChild(img)

    }
    else if(val == "0803" || val == "0703" || val == "0806" || val == "0903" || val == "0814" || val=="0816" || val=="0706" || val=="0810" || val=="0813" ){
        console.log("This No. is MTN")
        alert("This No is MTN")
    }
    else if(val == "0805" || val == "0705" || val == "0807" || val == "0905" || val == "0815" || val=="0903"){
        console.log("This No. is GLO")
        alert("This No is GLO")
    }
    else if(val == "0809" || val == "0818" || val == "0909" || val == "0817" ){
        console.log("This No. is 9mobile")
        alert("This No is 9mobile")
    }
    
}

function deleteImage(){
    var img = document.querySelector(".telco-logo")
    img.parentNode.removeChild(img)

}

document.querySelector('#number').addEventListener("input", (e)=>{
    let val = document.querySelector("#number").value
    let valueLength = val.length 
    var imageDiv = document.querySelector("#image-div")
    console.log(valueLength)
    var childNodesPresent = imageDiv.childNodes.length
    console.log(childNodesPresent)

    if (valueLength == 4 && !childNodesPresent){
        let stringVal = document.querySelector("#number").value
        let truncVal = stringVal.slice(0,4)
        checkVal(truncVal)
    }
    else if(valueLength <= 4 && childNodesPresent){
        deleteImage()
    }
} )