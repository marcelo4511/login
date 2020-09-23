import axios from 'axios'

const  setUserData = (state,userData)=> {
    state.user = userData
    localStorage.setItem('user',JSON.stringify(userData))
    axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
}

const clearUserData = () => {
    localStorage.removeItem('user')
    location.reload()
}

const list = (state,user) => {
    state.user = user
}

export default {
    setUserData,
    clearUserData,
    list
}