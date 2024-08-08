import mongoose, { Schema } from "mongoose";
import { HistoryType } from "../../types/history.type";

const historySchema = new Schema<HistoryType>({
  id: {
    type: String,
    required: [true, "Id is required"],
  },
  width: {
    type: Number,
    required: [true, "Width is required"],
  },
  height: {
    type: Number,
    default: 0
  },
  greyscale: {
    type: Boolean,
    default: false
  },
  young: {
    type: Boolean,
    default: false
  },
  url: {
    type: String,
    required: [true, "Url is required"],
  },
});

export const HistoryModel = mongoose.model("History", historySchema);