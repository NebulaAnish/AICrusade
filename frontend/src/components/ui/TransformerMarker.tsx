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
    const handleModalClose = () => {
        setModalOpen(false);
    };
    const handleModalOpen = () => {
        setModalOpen(true);
    };
    return (
        <>
            {modalOpen ? (
                <Modal onClose={handleModalClose}>
                    <div className="modal-content relative bg-white shadow-md rounded-md p-4 flex flex-col items-center justify-center">
                        {fault ? (
                            <span className="text-red font-semibold absolute top-5 right-2">Fault Detected</span>
                        ) : (
                            ''
                        )}
                        <img
                            className='w-[10rem]'
                            src={fault ? faultyTransformer : normalTransformer}
                            alt=""
                        />
                        <div className="content flex flex-col items-start mt-2">
                            <div className="flex items-center flex-row justify-center text-xl">
                                <span className="detail-title mr-2 font-bold ">location:</span> {location}
                            </div>
                            <div className="flex items-center flex-row justify-center text-xl">
                                <span className="detail-title mr-2 font-bold ">lat lng:</span> {latitude} {longitude}
                            </div>
                            <div className="flex items-center flex-row justify-center text-xl">
                                <span className="detail-title mr-2 font-bold ">Installed At:</span>{' '}
                                {installed_at.toISOString()}
                            </div>
                            <div className="flex items-center flex-row justify-center text-xl">
                                <span className="detail-title mr-2 font-bold ">Transformer Type:</span>{' '}
                                {transformer_type}
                            </div>{' '}
                            <div className="flex items-center flex-row justify-center text-xl">
                                <span className="detail-title mr-2 font-bold ">Manufacture Type:</span>{' '}
                                {manufacture_type}
                            </div>{' '}
                        </div>
                    </div>
                </Modal>
            ) : (
                ''
            )}
            <Marker
                key={latitude + longitude}
                coordinates={{
                    lat: latitude,
                    lon: longitude,
                }}
                anchor="bottom"
                onClick={handleModalOpen}
            >
                <img height={'20px'} width={'20px'} src={fault ? faultyTransformer : normalTransformer} alt="marker" />
            </Marker>
        </>
    );
}

export default TransformerMarker;
