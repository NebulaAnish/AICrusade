import React, { useState } from 'react';
import { Transformer } from '../../../types/types';
import { faultyTransformer, normalTransformer } from '../../../db/images';
import { Marker } from 'react-mapbox-gl';
import Modal from './Modal';

function TransformerMarker({
    transformer: { latitude, longitude, fault, location, installed_at, transformer_type, manufacture_type },
}: {
    transformer: Transformer;
}) {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleModalClose = () => {};
    const handleModalOpen = () => {};
    return (
        <>
            {modalOpen && (
                <Modal onClose={handleModalClose}>
                    <div className="modal-content bg-white shadow-md rounded-md p-4 flex items-center justify-center">
                        <img width={'10rem'} src={fault ? faultyTransformer : normalTransformer} alt="" />
                        <div className="content flex flex-col items-start">
                            <div className="flex items-center flex-row justify-center">
                                <span className="detail-title mr-2 font-bold ">location:</span> {location}
                            </div>
                            <div className="flex items-center flex-row justify-center">
                                <span className="detail-title mr-2 font-bold ">lat lng:</span> {latitude} {longitude}
                            </div>
                            <div className="flex items-center flex-row justify-center">
                                <span className="detail-title mr-2 font-bold ">Installed At:</span>{' '}
                                {installed_at.toISOString()}
                            </div>
                            <div className="flex items-center flex-row justify-center">
                                <span className="detail-title mr-2 font-bold ">Transformer Type:</span>{' '}
                                {transformer_type}
                            </div>{' '}
                            <div className="flex items-center flex-row justify-center">
                                <span className="detail-title mr-2 font-bold ">Manufacture Type:</span>{' '}
                                {manufacture_type}
                            </div>{' '}
                        </div>
                    </div>
                </Modal>
            )}
            <Marker
                key={latitude + longitude}
                coordinates={{
                    lat: latitude,
                    lon: longitude,
                }}
                anchor="bottom"
            >
                <img height={'20px'} width={'20px'} src={fault ? faultyTransformer : normalTransformer} alt="marker" />
            </Marker>
        </>
    );
}

export default TransformerMarker;
