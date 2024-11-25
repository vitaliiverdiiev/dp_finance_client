type Props = {
  title: string;
};

export const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="py-4 lg:py-8">
      <h2 className="text-2xl font-medium uppercase">{title}</h2>
    </div>
  );
};
