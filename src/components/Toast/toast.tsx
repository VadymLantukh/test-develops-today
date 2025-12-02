import type { TToastType } from '../../types/types.ts';
import {
  AlertTriangle,
  CheckCircle,
  Info,
  type LucideIcon,
  X,
  XCircle,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import styles from './styles.module.css';

export interface IToastProps {
  type: TToastType;
  message: string;
  duration?: number;
  onClose: () => void;
  showCloseButton?: boolean;
}

const IconMap: Record<TToastType, LucideIcon> = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
};

export const Toast = ({
  type,
  message,
  duration = 3000,
  onClose,
  showCloseButton = false,
}: IToastProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const IconComponent = IconMap[type];

  useEffect(() => {
    if (duration > 0 && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, isVisible]);

  const handleAnimationEnd = () => {
    if (!isVisible) {
      onClose();
    }
  };

  const handleManualClose = () => {
    setIsVisible(false);
  };

  const typeClass = styles[type];
  const visibilityClass = isVisible ? styles.visible : styles.hidden;

  return (
    <div
      className={`${styles.toast} ${typeClass} ${visibilityClass}`}
      role="alert"
      aria-live="polite"
      onAnimationEnd={handleAnimationEnd}
    >
      <span className={styles.icon}>
        <IconComponent size={20} />
      </span>
      <span className={styles.message}>{message}</span>
      {(showCloseButton || duration === 0) && (
        <button
          className={styles.closeButton}
          onClick={handleManualClose}
          aria-label="Закрити сповіщення"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};
