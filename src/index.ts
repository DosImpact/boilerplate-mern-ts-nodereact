import * as express from "express";
import * as path from "path";
import * as cors from "cors";
import * as bodyParse from "body-parser";
import * as cookieParser from "cookie-parser";
import "./env";
import * as mongoose from "mongoose";
/**
 * Default Import
 */

import errorMiddleware from "./middleware/error.middleware";

const app = express();
const connect = mongoose
  .connect(process.env.MONGO_DB_URI, {
    dbName: "nodejs",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("✔ MongoDB connected..."))
  .catch((e) => console.error(`❌ MongoDB disconnected`, e));

app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 5000;
app.use("/uploads", express.static("uploads"));
app.use("/api/test", require("./routes/test"));
app.use("/api/users", require("./routes/users"));

// Serve static assets if in production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
//   });
// }

// 404 client error

// 500 Server error

app.use((req, res, next) => {
  res.status(404).send("NOT FOUND 😡");
});
app.use(errorMiddleware);
app.listen(port, () => {
  console.log(`✔ Server is running on http://localhost:${port}`);
});
