import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "0265e68f-74f3-4e37-935c-437312b838e7"
  }
})


export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data
    })
  },

  unfollow(id) {
    return instance.delete(`follow/` + id)
    .then(response => {
      return response.data
    })
  },

  follow(id) {
    return instance.post(`follow/` + id)
    .then(response => {
      return response.data
    })
  },

  getProfile(id) {
    console.warn('Obsolete method. Please profileAPI object');
    return profileAPI.getProfile(id)
  } 

}

export const profileAPI = {
  getProfile(id) {
    return instance.get(`profile/`+ id)
  }, 
  getStatus(id) {
    return instance.get(`profile/status/`+ id)
  }, 
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
  } 
}

export const authAPI = {
  
  me() {
    return instance.get(`auth/me/`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe});
  },
  logout() {
    return instance.delete(`auth/login`);
  }


}