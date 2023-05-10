const x = document.getElementById("item")
const y = document.getElementById("additem")
const z = document.getElementById("deletebutton")


function removeItem(){
    var itemArray = document.querySelectorAll('.anItem');
    for(var i=0; li=itemArray[i]; i++) {
        let check = li.lastChild
        if(check.checked==true)
        {
            li.parentNode.removeChild(li);
        }
        
    }
}

function cross(){
    var itemArray = document.querySelectorAll('.anItem');
    for(var i=0; li=itemArray[i]; i++) {
        let check = li.lastChild
        let text = li.firstChild
        if(check.checked==true)
        {
            text.strike()
        }
        
    }
}

var checkbox = document.querySelector("input[type=checkbox]")
if(checkbox!=null){
    checkbox.addEventListener('change', cross)
}


function addItem() {
    let li = document.createElement("li")
    li.innerText=x.value;
    li.className="anItem"
    let ul = document.getElementById("stufflist")
    let check = document.createElement("input")
    check.type="checkbox"
    check.name=x.value
    check.checked=false
    li.appendChild(check);
    ul.appendChild(li)

}

y.addEventListener("click", addItem);
z.addEventListener("click", removeItem);



