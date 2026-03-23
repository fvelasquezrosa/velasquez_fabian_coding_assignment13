export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  disabled?: boolean;
  backgroundColor?: string;
}
