export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export interface QuickReply {
  label: string;
  message: string;
  icon: string;
}

export interface QuestionCategory {
  id: string;
  label: string;
  icon: string;
  questions: QuickReply[];
}