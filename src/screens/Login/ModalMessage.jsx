export default function ModalMessage({ isOpen, children }) {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ backgroundColor: 'white', padding: '1em' }}>
          {children}
        </div>
      </div>
    );
  }