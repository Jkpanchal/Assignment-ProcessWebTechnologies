let dataResponse


fetch('http://localhost:5000/allusers',{
    method:'GET'
}).then((data)=>{
    data.json().then((res)=>{
        console.log(res);
        dataResponse = res
    })
})




function handleSubmit(event){
    event.preventDefault()
    
}