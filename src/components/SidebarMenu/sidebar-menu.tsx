import React, { useEffect, useRef, useCallback, Fragment } from 'react';
import styles from './styles.module.css';
import { type IMenuItem } from '../../types/types.ts';
import SidebarMenuItem from './sidebar-menu-item.tsx';

export interface ISidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: IMenuItem[];
}

export const SidebarMenu: React.FC<ISidebarMenuProps> = ({
  isOpen,
  onClose,
  items,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, handleOutsideClick]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuClass = isOpen ? styles.menuOpen : styles.menuClosed;

  return (
    <Fragment>
      {isOpen && <div className={styles.backdrop} onClick={onClose} />}

      <div
        ref={sidebarRef}
        className={`${styles.sidebarMenu} ${menuClass}`}
        aria-modal="true"
        role="dialog"
      >
        <button
          onClick={onClose}
          className={styles.closeBtn}
          aria-label="Закрити меню"
        >
          &times;
        </button>
        <ul className={styles.menuList}>
          {items.map(item => (
            <SidebarMenuItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default SidebarMenu;
