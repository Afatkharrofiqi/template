import {
  type ComponentProps,
  type ReactNode,
  forwardRef,
  useState,
} from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { PiEyeClosed } from "react-icons/pi";

import { cn } from "@/lib/utils";

interface InputProps extends ComponentProps<"input"> {
  error?: boolean;
  icon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClear = () => {
      if (ref && typeof ref === "function") {
        ref(null);
      } else if (ref && "current" in ref) {
        ref.current!.value = "";
      }
      props.onChange?.({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    };

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const inputType = type === "password" && showPassword ? "text" : type;

    return (
      <div className="relative flex items-center">
        {icon && <span className="absolute left-3 text-gray-500">{icon}</span>}
        <input
          type={inputType}
          ref={ref}
          className={cn(
            "flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            error ? "ring-1 ring-red-500" : "ring-transparent border-gray-200",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            className,
          )}
          {...props}
        />
        {props.value && type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-10 text-gray-500 hover:text-gray-700 focus:outline-none"
            tabIndex={-1}
          >
            {showPassword ? <IoMdEye /> : <PiEyeClosed />}
          </button>
        )}
        {props.value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            tabIndex={-1}
          >
            <IoIosCloseCircle />
          </button>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
