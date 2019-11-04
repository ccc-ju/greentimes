var mutations = {
    add(state){
        state.count++
        /**
         * mutations调用state中的数据
         * 做同步操作，直接修改state里边的数据
         * 如果需要异步提交，在actions中定义
         */
    },
    login(state,usernames){
        state.usernames = usernames
    }
}
export default mutations;