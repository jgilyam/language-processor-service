import mongoose from "mongoose";

const db = {
  connect: async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/textProcessor");
  },
};

export { db };
