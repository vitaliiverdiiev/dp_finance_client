export const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="iconWrapper">
      <span className="text-2xl font-medium text-red-500">{message}</span>
    </div>
  );
};
