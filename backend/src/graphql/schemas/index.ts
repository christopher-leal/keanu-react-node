import { readFileSync } from 'fs';
import path from 'path';

export const imageSchema = readFileSync(path.join(__dirname,'./image.schema.graphql'), { encoding: 'utf-8' });