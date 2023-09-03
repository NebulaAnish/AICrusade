import React from 'react';

export interface ModalProps {
    children: React.ReactNode;
    onClose: React.MouseEventHandler<HTMLDivElement>;
}
function index({ children, onClose }: ModalProps) {
    return (
        <div className="absolute inset-0">
            <div onClick={onClose} className="absolute modal-backdrop inset-0 z-[4]"></div>
            <div className="modal-content absolute z-[5] mt-[10%]">{children}</div>
        </div>
    );
}

export default index;
