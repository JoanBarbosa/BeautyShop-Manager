const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const healthRoutes = require("./routes/health.routes");
const notFound = require("./middlewares/not-found.middleware");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.disable("x-powered-by");
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.json({ success: true, message: "BeautyShop Manager API" });
});

app.use("/api/health", healthRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
