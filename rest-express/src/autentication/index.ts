export function isAuthenticated(token: string, sessions: Array<any>){
    const userSession = sessions.filter(session => { return session.autenticationToken == token })
    return userSession.length == 1
}

export function getIdOfUserSession( token: string, sessions: Array<any>){
    return sessions.filter(session => { return session.autenticationToken == token })[0].userId
}