module.exports = ({ env }) => {
    // know if we want to serve the admin panel
    // if not, we want to know the absolute URL of the admin panel (admin.artcoded.net)
    return {
        url: env("PUBLIC_ADMIN_URL", "/dashboard"),
        serveAdminPanel: env("PUBLIC_ADMIN_URL") == undefined,
    };
};
