import "reflect-metadata"; // We need this in order to use @Decorators

import config from "./config";
import express from "express";
import Logger from "../src/utils/logger";

async function startServer() {
  const app = express();
  app.use(require('express-status-monitor')());
 
  await require("./loaders").default({ expressApp: app });

  app
    .listen(config.port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
