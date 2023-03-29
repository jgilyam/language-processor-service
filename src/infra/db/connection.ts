import mongoose from "mongoose";

const db = {
  connect: async () => {
    await mongoose.connect(process.env.MONGODB_CNN || "");
  },
};

export { db };
