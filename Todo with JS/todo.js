var inp=document.getElementById('todo')
var items=document.querySelector(".items")
var todo;
var sno=0;
var notodo;
var arr=[]
if (sno===0) {
    notodo=document.createElement('p')
    notodo.innerHTML=" No Todos here."
    items.appendChild(notodo)
}
inp.addEventListener("keypress",(event)=>{
    if (event.key === 'Enter'){
        sno++
        notodo?.remove()
        todo = inp.value
        var item=document.createElement('li')
        item.innerHTML=` <div class="item">
                    <p>${sno}- ${todo}</p>
                    <button id="btn${sno}">Delete</button>
                </div>`
        arr.push(item)
        items.appendChild(arr[sno-1])
        var btn=document.getElementById(`btn${sno}`)
        btn.addEventListener("click",function(e){
            var toRemove = e.target.parentElement.parentElement;
            items.removeChild(toRemove)
            arr = arr.filter(element => element !== toRemove);
            //reassigning serial no..
            sno=0;
            items.innerHTML=''
            arr.forEach((item)=>{
                sno++
                item.querySelector('p').innerText=`${sno} - ${item.querySelector('p').innerText.trim().split('- ')[1]}`
                items.appendChild(item)
            })
            if (arr.length === 0) {
                items.appendChild(notodo)
            }
        })
    }
})
