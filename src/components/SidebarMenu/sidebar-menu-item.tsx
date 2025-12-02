import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import type { IMenuItem } from '../../types/types.ts';
import styles from './styles.module.css';

export interface ISidebarMenuItemProps {
  item: IMenuItem;
  level?: number;
}

const SidebarMenuItem: React.FC<ISidebarMenuItemProps> = ({
  item,
  level = 0,
}) => {
  const hasChildren = !!item.children && item.children.length > 0;
  const [isExpanded, setIsExpanded] = useState(false);
  const { icon: IconComponent } = item;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (hasChildren) {
      event.preventDefault();
      setIsExpanded(prev => !prev);
    }
  };

  const itemClass = hasChildren ? styles.parentItem : styles.childItem;
  const submenuClass = isExpanded ? styles.expanded : styles.collapsed;

  return (
    <li className={itemClass}>
      <a
        href={item.link || '#'}
        onClick={handleClick}
        className={styles.menuLink}
        style={{ paddingLeft: `${15 + level * 15}px` }}
        aria-expanded={hasChildren ? isExpanded : undefined}
      >
        {IconComponent && (
          <span className={styles.icon}>
            <IconComponent size={20} />
          </span>
        )}
        {item.label}

        {hasChildren && (
          <span className={styles.toggle}>
            {isExpanded ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </span>
        )}
      </a>

      {hasChildren && (
        <ul className={`${styles.submenu} ${submenuClass}`}>
          {item.children!.map(child => (
            <SidebarMenuItem key={child.id} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarMenuItem;
