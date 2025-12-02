import { useState } from 'react';
import { simpleItems } from '../../constants/constants.ts';
import SidebarMenu from '../SidebarMenu/sidebar-menu.tsx';
import { Toast } from '../Toast/toast.tsx';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Demonstration of Components</h1>
      <button onClick={() => setIsMenuOpen(true)}>Open Sidebar</button>
      <SidebarMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={simpleItems}
      />

      {showToast && (
        <Toast
          type="info"
          message="Welcome!"
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};
export default App;
