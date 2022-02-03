import mongoose from "mongoose";

const Connection = async (URL) => {
  await mongoose
    .connect(URL)
    .then(() => console.log("Databse Connected"))
    .catch((err) => {
      console.log(err);
    });
};

export default Connection;
