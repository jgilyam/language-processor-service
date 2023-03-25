import mongoose from "mongoose";

const db = {
  connect: async () => {
    await mongoose.connect("mongodb://user:password@127.0.0.1:27017/test");
  },
};

export { db };