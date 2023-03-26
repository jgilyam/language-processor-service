export type ResponseChatCompletition = {
  id: string;
  object: string;
  created: number;
  choices: Choice[];
  usage: Usage;
};

export type Choice = {
  index: number;
  message: Message;
  finish_reason: string;
};

export type Message = {
  role: string;
  content: string;
};

export type Usage = {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
};
