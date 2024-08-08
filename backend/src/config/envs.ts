import 'dotenv/config';
import { get } from 'env-var';



export const envs = {


  PORT: get('PORT').required().asPortNumber(),

  MONGO_HOST: get('MONGO_HOST').required().asString(),
  MONGO_PORT: get('MONGO_PORT').required().asString(),
  MONGO_DATABASE: get('MONGO_DATABASE').required().asString(),
  MONGO_USERNAME: get('MONGO_USERNAME').required().asString(),
  MONGO_PASSWORD: get('MONGO_PASSWORD').required().asString(),

}

