import { JSONSchemaType } from "ajv";

export interface IFormInput {
  width: number;
  height?: number;
  greyscale: boolean;
  young: boolean;
}

export const formSchema: JSONSchemaType<IFormInput> = {
  type: "object",
  properties: {
    width: { type: "number", minimum: 100 },
    height: { type: "number", nullable: true, minimum: 100 },
    greyscale: { type: "boolean" },
    young: { type: "boolean" },
  },
  required: ["width"],
  additionalProperties: false,
};
