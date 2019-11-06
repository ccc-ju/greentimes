import * as API from './index';//把一个文件的所有方法都给到一个对象上

export const reg=(params)=>{
    return API.POST('/api/v1/auth/reg',params)
}

export const login=(params)=>{
    return API.POST('/api/v1/auth/login',params)
}

export const getPro=(params)=>{
    return API.GET('/api/v1/products',params)
}

export const getDetail=(id,params)=>{
    return API.GET('/api/v1/products/'+id,params)
}

export const cart=(params,token)=>{
    return API.POST_Token('/api/v1/shop_carts',params,token)
}

export const cartList=(params,token)=>{
    return API.GETHEAD('/api/v1/shop_carts',params,token)
}

export const del=(id,params,token)=>{
    return API.DELETE('/api/v1/shop_carts/'+id,params,token)
}



