const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    'keyup', function(event){
        // console.log(event.key);
        if(event.key== "Enter") {
            console.log(this.value); // this is for item we cam use item.value also
            if(this.value!=""){ // if their is no text then dont save
            addToDo(this.value)
            this.value= "";
            }
        }
    }
)

const addToDo = (data) => {
    const listItem = document.createElement("li");
    listItem.innerHTML=`${data} 
    <i class="fas fa-times"></i>
    `;
    listItem.addEventListener("click",function() {
         this.classList.toggle("done");
        })
    listItem.querySelector("i").addEventListener("click", function() {
        listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
}

