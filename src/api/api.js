import * as axios from 'axios';
import { loginUser } from '../redux/auth-reducer';
import profileReducer from '../redux/profile-reducer';
import { follow } from '../redux/users-reducer';

const instanse = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "86599b5b-7d66-4b2a-8561-05431a549b31"
      }
})

export const GetUsersAPI = {
    getUsers(page, count) {
    return instanse.get(`users?page=${page}&count=${count}`)
        .then(response => response.data)
    },

    follow(id) {
        return instanse.post(`follow/${id}`).then(response => response.data)
    },
    unfollow(id) {
        return instanse.delete(`follow/${id}`).then(response => response.data)
    }
} 

export const ProfileAPI = {
    profile(id) {
        return instanse.get(`profile/${id}`).then(response => response.data)
    },
    getStatus(id) {
        return instanse.get(`/profile/status/${id}`)
    },
    setStatus(status) {
        return instanse.put(`/profile/status`, {status})
    },
    setPhoto(photos) {
        const formData = new FormData();
        formData.append("image", photos)
        return instanse.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const LoginAPI = {
    login() {
        return instanse.get(`auth/me`)
        .then(response => response.data)
    },
    loginning(email, password, rememberMe) {
        return instanse.post('/auth/login', {email, password, rememberMe})
    },
    logout() {
        return instanse.delete('/auth/login')
    }
}