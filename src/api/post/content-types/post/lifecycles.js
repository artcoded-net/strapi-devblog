module.exports = {
  beforeCreate: async ({ params }) => {
    // find the Admin User who is about to create the Post
    const adminUserId = params.data.createdBy;

    // find the corresponding Author
    const author = (
      await strapi.entityService.findMany("api::author.author", {
        filters: {
          admin_user: [adminUserId],
        },
      })
    )[0];

    // update the data payload of the request for creating the new post
    // by adding the Author to the 'authors' relation field
    params.data.authors.connect = [...params.data.authors.connect, author.id];
  },
};
