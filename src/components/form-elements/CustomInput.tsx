import {HTMLProps, useId} from 'react';

import cn from 'classnames';
import {Controller, RegisterOptions, useFormContext} from 'react-hook-form';
import {FormLabel} from "./common/FormLabel";
import {FormError} from "./common/FormError";

interface CustomInputProps extends HTMLProps<HTMLInputElement> {
    name: string;
    allowClear?: boolean;
    handleChange?: (v: string) => void;
    label?: string;
    rules?: RegisterOptions;
}

export const CustomInput = ({
    label,
    rules,
    name,
    handleChange,
    className,
    type,
    allowClear = false,
    ...props
    }: CustomInputProps) => {
    const {control} = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange}}) => {
                const isClearIconVisible = allowClear && !!value?.length;

                const resetField = () => {
                    onChange('');
                    handleChange?.('');
                };

                return (
                    <div className='space-y-1'>
                        <FormLabel>{label}</FormLabel>

                        <div className='relative'>
                            <input
                                onChange={onChange}
                                type={type}
                                value={value}
                                className={cn(
                                    'h-9 w-full rounded-lg border border-input-border bg-bg px-3 text-sm text-black outline-none hover:border-input-border2 focus:border-primary',
                                    {'pr-6': isClearIconVisible},
                                    className
                                )}
                                {...props}
                            />

                            {isClearIconVisible && (
                                <div className='' onClick={resetField}>X</div>
                                // <CustomIcon
                                //     className='absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2 cursor-pointer text-gray hover:text-dark'
                                //     name='sr-cross'
                                //     onClick={resetField}
                                // />
                            )}
                        </div>

                        <FormError name={name}/>
                    </div>
                );
            }}
        />
    );
};
