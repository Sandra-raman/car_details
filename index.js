function store(){
    let details={
        brand:cbrand.value,
        price:cprice.value,
        key:ckey.value
    }
    if(details.brand==""||details.price==""||details.key=="")
        {
            alert('Please fill the following details')
        }
        else{
            if(details.key in localStorage){
                alert("Already entered this data")
            }
            else{
    localStorage.setItem(details.key, JSON.stringify(details));
    alert("Successfully added data")
        }
    }
}
function retrieve(){
    let retrieve=key2.value;
    console.log(retrieve);

      if(retrieve in localStorage){
       let e= JSON.parse(localStorage.getItem(retrieve))
    console.log(e);

    let d=`<div class="card" style="width: 17rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">BRAND :${e.brand}</li>
    <li class="list-group-item">PRICE :${e.price}</li>
    <li class="list-group-item">KEY :${e.key}</li>
  </ul>
</div>`
    data.innerHTML = d;
    }
    else{
        alert("Can't find details")
    }
}
function remove(){
    let romove=key3.value
    console.log(romove);
    
    if(romove in localStorage){
        localStorage.removeItem(romove)
    }
    else{
        alert("Not provided this key")
    }
}
function clearall(){
    localStorage.clear()
}