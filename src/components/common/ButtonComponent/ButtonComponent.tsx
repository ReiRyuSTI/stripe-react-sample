import { ButtonColorCSS } from '@/constants/ButtonColor';

type ButtonComponentProps = {
  label: string;
  color: keyof typeof ButtonColorCSS;
  onClick?: () => void;
};

export const ButtonComponent = (props: ButtonComponentProps) => {
  const { label, onClick, color } = props;
  return (
    <button
      type={onClick ? 'button' : 'submit'}
      onClick={onClick}
      className={'w-full rounded-md border py-2 px-4 text-sm ' + ButtonColorCSS[color]}
    >
      {label}
    </button>
  );
};
