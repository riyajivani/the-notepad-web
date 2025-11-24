import clsx from "clsx";
import LoadingSVG from "../assets/loading.svg";


const Button = ({
  children,
  className,
  disabled,
  isLoading,
  icon,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "text-center hover:opacity-85 hover:bg-[#5483b3]/80 hover:text-white rounded-lg cursor-pointer",
        { "opacity-85 cursor-not-allowed": disabled },
        className
      )}
      {...props}
    >
      {icon && (
        <img
          src={icon}
          alt="Loading..."
          className={clsx("w-5 h-4", { "mr-2": !!children })}
        />
      )}
      {isLoading && (
        <img
          src={LoadingSVG}
          alt="Loading..."
          className="w-5 h-4 mr-2 animate-spin"
        />
      )}
      {children}
    </button>
  );
};

export default Button;
