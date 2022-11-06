import toast from 'react-hot-toast';
import {ALERT_TYPES} from "../alertTypes";
import {CloseOutlined,CheckOutlined} from "@ant-design/icons";

interface ShowAlertParams {
    alertTitle?: string;
    message?: string;
    type?: 'error' | 'success' | 'warning' | 'info';
}

export const showAlert = ({ alertTitle, message = '', type = 'error' }: ShowAlertParams) => {
    const { icon, bgColor, borderColor, iconColor, title } = ALERT_TYPES[type];

    toast.custom((t) => (
        <div
            className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
            } flex w-full max-w-xs rounded-xl border-2 bg-white px-3 py-3 shadow-lg`}
            style={{
                backgroundColor: bgColor,
                borderColor: borderColor,
            }}
        >
            <div className='flex flex-1'>
                <div
                    className='flex items-center justify-center rounded-full shadow-lg'
                    style={{
                        backgroundColor: iconColor,
                        boxShadow: `0 10px 15px -3px ${iconColor}80, 0 4px 6px -4px ${iconColor}80`,
                    }}
                >
                    {type === 'error'&& (
                        <CloseOutlined className='w-8 h-8'/>
                    )}
                    {type === 'success'&& (
                        <CheckOutlined className='w-8 h-8'/>
                    )}
                    {/*<CustomIcon className='h-6 w-6 text-white' name={icon} />*/}
                </div>

                <div className='flex-1 px-4'>
                    <p className='text-base font-medium'>{alertTitle || title}</p>
                    <p className='text-gray-500 text-xs'>{message || ''}</p>
                </div>
            </div>
        </div>
    ));
};
