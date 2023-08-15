export type InputProps = {
  label?: string;
  placeholder: string;
  type?: "input" | "password" | "email" ;
  name: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};