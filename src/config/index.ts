import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
console.log(process.env.NODE_ENV);
process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT || "3000", 10),

  temp_folder_path: process.env.TEMP_FOLDER_PATH || "./temp/",

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },

  /**
   * API configs
   */
  api: {
    prefix: "/api/v1",
  },
};
