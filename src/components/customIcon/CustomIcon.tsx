import { forwardRef, SVGProps } from 'react';

import cn from 'classnames';
import {svgSprite} from "../../assets/icons/svgSprite";


interface IconProps extends SVGProps<SVGSVGElement> {
    name: string;
}

export const CustomIcon = forwardRef<SVGSVGElement, IconProps>(({ name, className, ...props }, parentRef) => (
    <svg {...props} ref={parentRef} className={cn('fill-current', className)} height={16} width={16}>
        <use href={`${svgSprite}#${name}`} />
    </svg>
));

CustomIcon.displayName = 'CustomIcon';
