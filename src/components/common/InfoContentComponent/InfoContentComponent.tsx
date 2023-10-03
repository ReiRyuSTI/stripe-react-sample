type InfoContentComponentProps = {
  label: string;
  content: string;
};

export const InfoContentComponent = (props: InfoContentComponentProps) => {
  const { label, content } = props;
  return (
    <ul className="flex flex-row items-center justify-between text-sm">
      <li className="">{label}</li>
      <li className="">{content}</li>
    </ul>
  );
};
