
export const Login = (body: any) => {
    let authInfo:object = {
        email:  body.getEmail,
        password: body.getPassword
    }
    let authContent:any = JSON.stringify(authInfo);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: authContent
    };

    const GetToken = async() =>{
       let response:any = await fetch(`http://localhost:8081/login`, requestOptions);
       let data:any = await response.json();
       return data.autenticationToken;
    }
    GetToken()
    if(!localStorage.getItem('token')){
        GetToken().then((token:string)=>{
            localStorage.setItem("token", token);
        })
    }
    else{
        alert('vc está logado');
        
    }
} 

/* export const post = (route: string, body: object) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
        
    fetch(`http://localhost:8081/${route}`, requestOptions)
    .then(response => response.json())
    .then(data => {});
}

export const get = (route: string, body: object) => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'ajsdj21kda' },
        body: JSON.stringify(body)
    };
        
    fetch(`http://localhost:8081/${route}`, requestOptions)
    .then(response => {
        console.log(response);
        
    })
    .then(data => {});
} */