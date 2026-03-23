export type TextVariant = 'body' | 'caption' | 'heading';

export interface TextProps {
  text: string;
  variant?: TextVariant;
  disabled?: boolean;
  color?: string;
  backgroundColor?: string;
}
