module.exports = {
    routes: [
        {
            method: "GET",
            path: "/posts/example",
            handler: "api::post.post.exampleAction",
            config: {
            // some configuration
            },
        },
    ],
};
