import { Schema, model, connect } from "mongoose";
import { CampaignAxisEntity, LanguageModelEntity } from "../../../../../domain/entities";
import { LanguageModelOperation } from "../../../../../domain/enums";

const languageModelSchema = new Schema<LanguageModelEntity>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  chatCompletition: { type: Schema.Types.Mixed, required: true },
  operation: { type: String, enum: LanguageModelOperation },
});

const LanguageModel = model<LanguageModelEntity>("LanguageModel", languageModelSchema);

export default LanguageModel;
