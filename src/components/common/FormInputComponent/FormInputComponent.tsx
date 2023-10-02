import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

type FormInputComponentProps<T extends FieldValues> = UseControllerProps<T> & { label: string; disable?: true };

export const FormInputComponent = <T extends FieldValues>(props: FormInputComponentProps<T>) => {
  const { name, control, rules, label, disable } = props;
  const { field, fieldState } = useController<T>({ name, control, rules });
  const { error } = fieldState;

  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-row items-center justify-between text-sm">
        <span className="px-1">{label}</span>
        <input className="rounded-md border border-gray-200 py-2 px-1" {...field} disabled={disable} />
      </div>
      <span className="h-5 text-right text-sm text-red-600">{error?.message}</span>
    </div>
  );
};
