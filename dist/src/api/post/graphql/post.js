module.exports = {
    likePostMutation: `
    type Mutation {
        likePost(id: ID!): PostEntityResponse
    }
  `,
    getLikePostResolver: (strapi) => {
        const resolverFunction = async (parent, args, ctx, info) => {
            // resolver implementation
            const { id: postId } = args;
            const userId = ctx.state.user.id;
            const likedPost = await strapi
                .service("api::post.post")
                .likePost({ postId, userId });
            const { toEntityResponse } = strapi
                .plugin("graphql")
                .service("format").returnTypes;
            const formattedResponse = toEntityResponse(likedPost, {
                args,
                resourceUID: "api::post.post",
            });
            return formattedResponse;
        };
        return resolverFunction;
    },
    likePostMutationConfig: {
        auth: {
            scope: ["api::post.post.likePost"],
        },
    },
};
