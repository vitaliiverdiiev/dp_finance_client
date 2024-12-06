import { NavLink as RouterLink, NavLinkProps } from 'react-router';

type Props = NavLinkProps & {
  activeClassName?: string; 
  className?: string;
  label?: string;
};

export const NavLink: React.FC<Props> = ({
  label,
  children,
  activeClassName = 'text-[#4da187] font-bold',
  className = 'text-black p-2',
  ...props
}) => {
  return (
    <RouterLink
      {...props}
      className={({ isActive }) =>
        isActive ? `${className} ${activeClassName}` : className
      }
    >
      {label || children}
    </RouterLink>
  );
};
