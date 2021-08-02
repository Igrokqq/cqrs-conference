export default {
  envMode: {
    isStaging: process.env.NODE_ENV === "staging",
    isProduction: process.env.NODE_ENV === "production",
    isDevelopment: process.env.NODE_ENV === "development",
  },
  server: {
    port: process.env.PORT,
    corsOptions: {
      origin: "*",
    },
    router: {
      apiBaseUrl: "/api",
    },
  },
};
