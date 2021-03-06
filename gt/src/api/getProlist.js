import * as API from './index';//把一个文件的所有方法都给到一个对象上

export const reg=(params)=>{
    return API.POST('/api/v1/auth/reg',params)
}

export const login=(params)=>{
    return API.POST('/api/v1/auth/login',params)
}

export const getProlist=(params)=>{
    return API.GET('/api/v1/products',params)
}

export const getPro=(params)=>{
    return API.GET('/api/v1/products',params)
}

export const getDetail=(params)=>{
    return API.GET('/api/v1/products/:id',params)
}

export const carts=(params,token)=>{
    return API.GETHEAD('/api/v1/shop_carts',params,token)
}




