var actions = {
    /**
     * 一般让mutatoins和actions函数保持一致
     * 调用mutations中的数据进行提交，需要有个参数{commit}
     * 如果数据需要进行计算得到新的数据的情况下，可以在getters中返回
     */
    yibuadd({commit}){
        setTimeout(function () { 
            commit('add')//add是当前mutations里的函数名，代表调用函数方法更新数据
         },2000)
    },
    yblogin({commit},usernames){
        setTimeout(function(){
            commit('login',usernames)
        },2000)
    }
}
export default actions;
