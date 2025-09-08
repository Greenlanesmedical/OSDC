import { useEffect, useRef } from "react";
export default function Modal({ open, onClose, title, children }){
  const ref = useRef(null);
  useEffect(()=>{ if(open){ ref.current?.focus(); } },[open]);
  if(!open) return null;
  return (
    <div className="dialog-backdrop" role="presentation" onClick={onClose}>
      <div className="dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabIndex={-1} ref={ref} onClick={e=>e.stopPropagation()}>
        <header>
          <h3 id="modal-title">{title}</h3>
          <button aria-label="Close" onClick={onClose}>✕</button>
        </header>
        <div>{children}</div>
      </div>
    </div>
  );
}
