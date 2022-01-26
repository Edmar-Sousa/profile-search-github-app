import axios from 'axios'


export default axios.create({
    baseURL : 'https://api.github.com/users',
    timeout : 10000,
    headers : {
        'User-Agent': 'request'
    }
})
