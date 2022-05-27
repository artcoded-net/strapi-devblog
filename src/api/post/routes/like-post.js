module.exports = {
  routes: [
    {
      method: "PUT",
      path: "/posts/:id/like",
      handler: "api::post.post.likePost",
    },
  ],
};
