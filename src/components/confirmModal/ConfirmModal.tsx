import React, {PropsWithChildren, useState} from 'react';
import {CustomButton} from "../customButton/CustomButton";
import {Modal} from "antd";

interface ConfirmModalProps extends PropsWithChildren {
    title?: string,
    onConfirm: (v) => void,
    buttonText?: string
}

export const ConfirmModal = ({title = 'Действительно удалить?', buttonText = 'Удалить', onConfirm, children}: ConfirmModalProps) => {
    const [isVisible, setIsVisible] = useState(false)

    const hideModal = () => {
        setIsVisible(false)
    }

    return (
        <div>
            <div onClick={() => setIsVisible(true)}>{children}</div>
            <Modal
                title={title}
                onCancel={hideModal}
                visible={isVisible}
                footer={null}
            >
                <div className='flex space-x-3 items-center'>
                    <CustomButton
                        onClick={(event) => {
                            onConfirm(event)
                            hideModal()
                        }}
                    >
                        {buttonText}
                    </CustomButton>
                    <CustomButton className='!bg-red-400 hover:bg-opacity-75'>Отменить</CustomButton>
                </div>
            </Modal>
        </div>
    );
};
