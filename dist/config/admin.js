module.exports = ({ env }) => ({
    auth: {
        secret: env("ADMIN_JWT_SECRET", "3005f8e3851d45c9e8e012f5e63bfdf2"),
    },
    url: "/dashboard", // localhost:1337/dashboard
});
