import { RESTDataSource } from "@apollo/datasource-rest";
import { ImageDto } from "../../dtos/image.dto";

type Image = {
  url: string;
};
export class KeanuAPI extends RESTDataSource {
  override baseURL = "https://placekeanu.com/";

  async getImage(imageDto: ImageDto): Promise<Image> {
    const { width, height, greyscale, young } = imageDto;

    if (!width) {
      throw new Error("Width field is a mandatory field");
    }
    let url = `${width}`;
    if (height) {
      url = `${url}/${height}`;
    }
    if (greyscale || young) {
      url = `${url}/${greyscale ? "g" : ""}${young ? "y" : ""}`;
    }
    const data = await this.get(url);
    return {
      url: data,
    };
  }
}
