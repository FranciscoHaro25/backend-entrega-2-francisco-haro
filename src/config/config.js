require("dotenv").config();

// Configuración del servidor
const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
};

module.exports = config;
