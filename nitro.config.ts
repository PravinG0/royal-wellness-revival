export default defineNitroConfig({
  externals: {
    inline: [
      "@tanstack/start-server-core",
      "@tanstack/react-start",
      "@tanstack/router-core",
      "@tanstack/react-router"
    ]
  }
});
