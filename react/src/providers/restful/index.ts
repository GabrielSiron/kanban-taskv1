export const Login = (body: object) => {

    var seen: Array<any> = [];

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body, function(key, val) {
            if (val != null && typeof val == "object") {
                 if (seen.indexOf(val) >= 0) {
                     return;
                 }
                 seen.push(val);
             }
             return val;
         })
    };

    if(!localStorage.getItem('token')){
        fetch(`http://localhost:8081/login`, requestOptions)
        .then(response => {
            console.log(response.json());
            
        })
        .then((data:any) => {
            localStorage.setItem('token', data.authenticationToken)
        });
    }
} 

export const post = (route: string, body: object) => {

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
}