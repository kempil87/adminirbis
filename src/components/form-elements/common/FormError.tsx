import { useFormContext } from 'react-hook-form';

interface InputErrorProps {
    name: string;
}

export const FormError = ({ name }: InputErrorProps) => {
    const {
        formState: { errors },
    } = useFormContext();

    const error = errors[name]?.message as string;

    if (!error) return null;

    return <div className='text-xs text-red-600'>{error}</div>;
};
