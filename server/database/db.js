import mongoose from "mongoose";

const Connection = async (URL) => {
  await mongoose
    .connect(URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => {
      console.log(err);
    });
};

export default Connection;
