import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_4 = 'gpt-4',
  GPT_4_32K = 'gpt-4-32k',
  DEMANDGPT = 'demandgpt-v1.0',
  ROBERT_SHEMIN_GPT_7B = 'robert-shemin-gpt-7b-v1.0',
  ROBERT_SHEMIN_GPT_13B = 'robert-shemin-gpt-13b-v1.0',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.DEMANDGPT;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.DEMANDGPT]: {
    id: OpenAIModelID.DEMANDGPT,
    name: 'DemandGPT',
    maxLength: 6000,
    tokenLimit: 2048,
  },
  [OpenAIModelID.ROBERT_SHEMIN_GPT_7B]: {
    id: OpenAIModelID.ROBERT_SHEMIN_GPT_7B,
    name: 'RobertSheminGPT-7B',
    maxLength: 6000,
    tokenLimit: 2048,
  },
  [OpenAIModelID.ROBERT_SHEMIN_GPT_13B]: {
    id: OpenAIModelID.ROBERT_SHEMIN_GPT_13B,
    name: 'RobertSheminGPT-13B',
    maxLength: 6000,
    tokenLimit: 2048,
  },
};
