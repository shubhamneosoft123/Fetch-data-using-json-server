async function load() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    let data = await (await fetch(url)).json();
    console.log(data);


    if(data.length>0){
        let temp="";


        data.forEach(u => {
            temp +="<tr>";
            temp +="<td>" + u.id+"</td>";
            temp +="<td>" + u.name+"</td>";
            temp +="<td>" + u.email+"</td></tr>"
        });
        document.getElementById("data").innerHTML=temp;
    }
    
}

