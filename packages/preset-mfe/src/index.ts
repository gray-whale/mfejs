export default () => {
    return {
        plugins: [
            // registerMethods
            require.resolve('./registerMethods'),
            // commands

            require.resolve('./commands/dev/dev'),
        ].filter(Boolean)
    }
};