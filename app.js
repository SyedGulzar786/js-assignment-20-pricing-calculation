var inputBox = document.getElementById("input-box")
var list = document.getElementById("list")
var amount = document.getElementById("amount")
var clear = document.getElementById("clear");
var total = document.getElementById("total");
function addEnter(event){

    if(event.keyCode == 13){
        
        if(inputBox.value == ""){
            alert("please add one items")
        }
        else{
            list.innerHTML += `<li> <span>${inputBox.value}</span> <span>${amount.value}</span> <button id="del" class='del' onclick='delet(event)'>delete</button></li>`
        }

        addition()
        inputBox.value = ""
        amount.value = ""
    }   
    
}

function add(){
    
    if(inputBox.value == ""){
        alert("please add one items")
    }
    else{
        list.innerHTML += `<li> <span>${inputBox.value}</span> <span>${amount.value}</span> <button id="del" class='del' onclick='delet(event)'>delete</button></li>`
    }
    addition()
    inputBox.value = ""
    amount.value = ""
}  

var oldValue = Number(total.innerHTML)
function addition(){
    var addi = Number(amount.value)
    oldValue = addi + oldValue
    total.innerHTML = oldValue
    //  console.log(oldValue)
    //  console.log(addi,typeof addi, amount.value, oldValue , typeof oldValue )
}

function clearAll(e){
    list.innerHTML = ""
    total.innerHTML = ""
    oldValue = Number(total.innerHTML)
}

// function sum(nums){
//     var res = 0;

//     for(var i = 0; i <= nums.length;i++){
//         res += nums[i];
//     }

//     return res;
// }

// var numbers = [1,2,3,4,5];
// console.log(result : ${sum(numbers)})

function delet(e){
    e.target.parentNode.remove()
    var cp = e.target.parentNode.childNodes[3].innerHTML
    cp = Number(cp)
    total.innerHTML = oldValue - cp
    oldValue = Number(total.innerHTML)
}