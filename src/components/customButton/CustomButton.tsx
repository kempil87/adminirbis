import {ButtonHTMLAttributes, PropsWithChildren} from 'react';
import {Spin} from "antd";
import cn from "classnames";

export type ButtonView = 'danger' | 'primary' | 'default';

export type ButtonSize = 'xxs' | 'xs' | 's' | 'm';

export interface CustomButtonProps extends  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
    loading?: boolean;
    size?: ButtonSize;
    view?: ButtonView;
}

export const CustomButton = ({
     children,
     className,
     view = 'primary',
     size = 's',
     disabled = false,
     loading = false,
     ...props
 }:CustomButtonProps) => (
    <button
        disabled={disabled || loading}
        className={cn('text-center inline-flex justify-center font-medium cursor-pointer px-12 py-1.5 rounded-[10px] bg-[#6d7885] hover:bg-opacity-80 transition',className)}
        {...props}
    >
        {loading && (
            <Spin className='mr-3' size={"small"}/>
        )}
        <div className={cn('!text-white hover:text-white')}>
            {children}
        </div>
    </button>
);
