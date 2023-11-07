/**
 * preset即对外暴露插件集
 */
export default () => {
    return {
        plugins: [
            // registerMethods
            require.resolve('./registerMethods'),
            // commands
            require.resolve('./commands/dev/dev'),
        ].filter(Boolean)  //过滤掉不存在的插件，等价于filter(x=>Boolean(x))
    }
};