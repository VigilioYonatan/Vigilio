// filepath: form-validator/src/types/index.ts

export interface FieldValidation {
  required: boolean;
  minLength?: number;
  maxLength?: number;
  regex?: RegExp;
  message: string;
}

export interface Schema {
  [field: string]: FieldValidation;
}

export interface ValidationResult {
  isValid: boolean;
  messages: Record<string, string>;
}

export interface FeedbackMessage {
  field: string;
  message: string;
}
