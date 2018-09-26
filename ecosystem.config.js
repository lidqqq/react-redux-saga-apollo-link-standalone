module.exports = {
  apps: [
    {
      name: "server",
      script: "./src/server/index.js",
      watch: false,
      instances: 1,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    },
    {
      name: "app",
      script: "./node_modules/.bin/next",
      args: "start src/app",
      watch: false,
      instances: 1,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
