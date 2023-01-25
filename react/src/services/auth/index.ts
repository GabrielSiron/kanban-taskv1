export const Login = async(body:any, loading:any, setToken:any) => {
    loading.setLoading(true);
    
    let authContent:any = JSON.stringify(body);

    await fetch(`http://localhost:8081/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: authContent
    })
    .then(async(resp)=>{
        loading.setLoading(false);
        let data:any = await resp.json();
        sessionStorage.setItem('token', data.autenticationToken);
        setToken.setToken(data.autenticationToken);
    });
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