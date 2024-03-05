import { IconType } from 'react-icons';

type TextFieldProps = {
  label?: string;
  name?: string;
  type?: string;
  error?: string;
  icon?: IconType;
};

export default function TextField({
  label,
  type = 'text',
  icon: Icon,
}: TextFieldProps) {
  return (
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <Icon />
        </div>
      )}
      <input
        type={type}
        className={`border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
          Icon && 'ps-10'
        }`}
        placeholder={label}
      />
    </div>
  );
}
