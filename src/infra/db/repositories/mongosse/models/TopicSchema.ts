import { Schema, model } from "mongoose";
import { TopicEntity } from "../../../../../domain/entities";

const topicSchema = new Schema<TopicEntity>({
  name: { type: String, required: true },
});

const Topic = model<TopicEntity>("Topic", topicSchema);

export default Topic;
