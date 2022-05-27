module.exports = ({ env }) => ({
  url: env("PUBLIC_SERVER_URL", ""),
});
