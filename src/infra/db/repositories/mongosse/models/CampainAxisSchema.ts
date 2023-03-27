import { Schema, model, connect } from "mongoose";
import { CampaignAxisEntity } from "../../../../../domain/entities";

const campaignAxisSchema = new Schema<CampaignAxisEntity>({
  topic: { type: Schema.Types.ObjectId, ref: "Topic", required: true },
  proposal: { type: String, required: true },
});

const CampaignAxis = model<CampaignAxisEntity>("CampaignAxis", campaignAxisSchema);

export default CampaignAxis;
