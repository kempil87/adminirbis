import { HTMLProps, PropsWithChildren } from 'react';

import cn from 'classnames';

export const FormLabel = ({ children, className, ...props }: PropsWithChildren<HTMLProps<HTMLLabelElement>>) => {
    if (!children) return null;

    return (
        <label className={cn('block text-sm text-[#6d7885]', className)} {...props}>
            {children}
        </label>
    );
};
