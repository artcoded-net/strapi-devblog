"use strict";
const { likePostMutation, getLikePostResolver, likePostMutationConfig, } = require("./api/post/graphql/post");
module.exports = {
    /**
     * An asynchronous register function that runs before
     * your application is initialized.
     *
     * This gives you an opportunity to extend code.
     */
    register({ strapi }) {
        const extensionService = strapi.plugin("graphql").service("extension");
        const extension = ({ nexus }) => ({
            // GraphQL SDL
            typeDefs: likePostMutation,
            resolvers: {
                Mutation: {
                    likePost: getLikePostResolver(strapi),
                },
            },
            resolversConfig: {
                "Mutation.likePost": likePostMutationConfig,
            },
        });
        extensionService.use(extension);
    },
    /**
     * An asynchronous bootstrap function that runs before
     * your application gets started.
     *
     * This gives you an opportunity to set up your data model,
     * run jobs, or perform some special logic.
     */
    bootstrap({ strapi }) {
        // we listen to lifecycle events
        strapi.db.lifecycles.subscribe({
            models: ["admin::user"],
            afterCreate: async ({ result }) => {
                // create an Author instance from the fields of the Admin User
                // that has just been created
                // Exctract the fields from the newly created Admin User
                const { id, firstname, lastname, email, username, createdAt, updatedAt, } = result;
                await strapi.service("api::author.author").create({
                    data: {
                        firstname,
                        lastname,
                        email,
                        username,
                        createdAt,
                        updatedAt,
                        admin_user: [id],
                    },
                });
            },
            afterUpdate: async ({ result }) => {
                // get the ID of the Author that corresponds
                // to the Admin User that's been just updated
                const correspondingAuthor = (await strapi.entityService.findMany("api::author.author", {
                    populate: ["admin_user"],
                    filters: {
                        admin_user: {
                            id: result.id,
                        },
                    },
                }))[0];
                console.log(correspondingAuthor);
                // update the Author accordingly
                const { firstname, lastname, email, username, updatedAt } = result;
                await strapi
                    .service("api::author.author")
                    .update(correspondingAuthor.id, {
                    data: {
                        firstname,
                        lastname,
                        email,
                        username,
                        updatedAt,
                    },
                });
            },
        });
    },
};
