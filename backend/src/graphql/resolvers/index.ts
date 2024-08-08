import { DataSourceContext } from "..";
import { ImageDto } from "../../dtos/image.dto";
import { HistoryModel } from "../../mongo";
import { HistoryType } from "../../types/history.type";
import { v4 as uuidv4 } from 'uuid';

export const imageResolver = {
  Query: {
    keanuImage: async (_: unknown, imageDto: ImageDto, { dataSources }: DataSourceContext) => {
      const imageData = await dataSources.keanuAPI.getImage(imageDto);
      const { width, height, greyscale, young } = imageDto
      const historyData: HistoryType = {
        id: uuidv4(),
        width,
        height,
        greyscale,
        young,
        url: imageData.url
      }
      const history = new HistoryModel(historyData)
      await history.save();

      return imageData
    },
    getHistory: async (_: unknown, { limit = 10 }: { limit: number }) => {
      const history = await HistoryModel.find({}).sort({ date: 'desc' }).limit(limit)
      return history
    },
  },
};
