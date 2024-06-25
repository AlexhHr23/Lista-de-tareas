import axios from 'axios'

const taskApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = () =>  taskApi.get('/') ;

export const getTask = (id) => taskApi.get(`/${id}/`)

export const createTask = (id) => taskApi.post(`(/${id})`);

export const deleteTask = (id) => taskApi.delete(`/${id}`)

export const updateTask = (id, task) => taskApi.put(`/${id}/`, task)