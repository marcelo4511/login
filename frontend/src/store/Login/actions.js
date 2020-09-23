import axios from 'axios'

const login = ({commit},credentials) => {
    return axios.post('http://localhost:8000/api/login',credentials)
                    .then(({data}) => {
                        commit('setUserData',data)
                    })
}

const logout = ({commit}) => {
    commit('clearUserData')
}

const loginList = ({commit}) => {
    axios.get('http://127.0.0.1:8000/api/login')
    .then(res => {
        console.log(res.data)
        commit('list',res.data)
    })
}

export default {
    login,
    logout,
    loginList
}