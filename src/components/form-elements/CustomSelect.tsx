import React, {ChangeEvent, HTMLProps, useId} from 'react';

import cn from 'classnames';
import {Controller, RegisterOptions, useFormContext} from 'react-hook-form';
import {FormLabel} from "./common/FormLabel";
import {FormError} from "./common/FormError";
import {Select, SelectProps} from "antd";
import {DownOutlined} from "@ant-design/icons";

interface CustomSelectProps extends SelectProps {
    name: string;
    className?: string;
    allowClear?: boolean;
    handleChange?: (v: React.ChangeEvent<HTMLSelectElement>) => void;
    label?: string;
    rules?: RegisterOptions;
    options?: any[];
}

export const CustomSelect = ({
    label,
    rules,
    options = [],
    name,
    handleChange,
    className,
    ...props
    }: CustomSelectProps) => {
    const {control} = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange}}) => {
                const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
                    onChange(e);
                    handleChange?.(e);
                };
                return (
                    <div className='space-y-1'>
                        <FormLabel>{label}</FormLabel>

                        <div>
                            <Select
                                onChange={handleSelectChange}
                                value={value}
                                notFoundContent='Ничего не найдено'
                                className={cn('w-full', className)}
                                suffixIcon={<DownOutlined />}
                                filterOption={(input, option) =>
                                    (option?.label as unknown as string).toLowerCase().includes(input.toLowerCase())}
                                {...props}
                            >
                                {options.map((i) => (
                                    <Select.Option key={i._id} value={i._id}>{i.name}</Select.Option>
                                ))}
                            </Select>
                        </div>

                        <FormError name={name}/>
                    </div>
                );
            }}
        />
    );
};
