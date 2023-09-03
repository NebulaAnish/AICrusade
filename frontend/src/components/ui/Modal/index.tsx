import React from 'react';

export interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}
function index({ children }: ModalProps) {
    return (
        <div className="absolute inset-0">
            <div className="absolute modal-backdrop inset-0 z-0"></div>
            <div className="modal-content absolute z-[2]">{children}</div>
        </div>
    );
}

export default index;
