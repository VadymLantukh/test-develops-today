import {
  useState,
  useMemo,
  type InputHTMLAttributes,
  type ChangeEvent,
} from 'react';
import styles from './styles.module.css';
import { Eye, EyeOff, type LucideIcon, X } from 'lucide-react';
import { TypeInput } from '../../types/types.ts';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
  value: string;
}

interface InputIconProps {
  IconComponent: LucideIcon;
  onClick?: () => void;
  ariaLabel: string;
}

const InputIcon = ({ IconComponent, onClick, ariaLabel }: InputIconProps) => (
  <button className={styles.icon} onClick={onClick} aria-label={ariaLabel}>
    <IconComponent size={18} />
  </button>
);

export const Input = ({
  type = TypeInput.TEXT,
  clearable = false,
  value,
  onChange,
  className,
  ...rest
}: IInputProps) => {
  const isPasswordField = type === TypeInput.PASSWORD;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const currentType = useMemo(() => {
    if (isPasswordField) {
      return isPasswordVisible ? TypeInput.TEXT : TypeInput.PASSWORD;
    }
    return type;
  }, [type, isPasswordField, isPasswordVisible]);

  const handleClear = () => {
    if (onChange) {
      onChange({
        target: { value: '' },
      } as ChangeEvent<HTMLInputElement>);
    }
  };

  const showPasswordToggle = isPasswordField;
  const showClearButton = clearable && value.length > 0;

  return (
    <div className={`${styles.inputWrapper} ${className || ''}`}>
      <input
        type={currentType}
        value={value}
        onChange={onChange}
        className={styles.input}
        {...rest}
      />

      {showPasswordToggle && (
        <InputIcon
          IconComponent={isPasswordVisible ? EyeOff : Eye}
          onClick={() => setIsPasswordVisible(prev => !prev)}
          ariaLabel={isPasswordVisible ? 'Hide password' : 'Show password'}
        />
      )}

      {showClearButton && (
        <InputIcon
          IconComponent={X}
          onClick={handleClear}
          ariaLabel="Clear input"
        />
      )}
    </div>
  );
};
