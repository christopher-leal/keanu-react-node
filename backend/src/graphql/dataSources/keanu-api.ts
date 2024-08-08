import { RESTDataSource } from '@apollo/datasource-rest';

type Image = {
  url: string
}
export class KeanuAPI extends RESTDataSource {
  override baseURL = 'https://placekeanu.com/';

  async getImage(width:string, height?: string, greyScale?: boolean, young?: boolean): Promise<Image> {
    let url = `${width}`
    if(height){
      url = `${url}/${height}`
    }
    if(greyScale||young){
      url = `${url}/${greyScale?'g':''}${young?'y':''}`
    }
    const data = await this.get(url);
    return {
      url: data
    };
  }
 
}