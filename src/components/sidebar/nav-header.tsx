import { RiMenuFold4Line, RiMenuUnfold4Line } from "react-icons/ri";
import { useSidebar } from "../ui/sidebar";

const NavHeader = () => {
  const { toggleSidebar, open } = useSidebar();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 group-data-[collapsible=icon]:md:grid-cols-1 items-center">
      {open ? (
        <>
          <RiMenuUnfold4Line
            onClick={() => toggleSidebar()}
            className="h-5 w-5 text-white hidden md:block cursor-pointer"
          />
          <img
            className="mx-auto w-[120px] md:mx-0 md:mr-2 md:col-span-3 md:max-w-[120px]"
            src="/minehaul-white.png"
            alt="logo"
          />
        </>
      ) : (
        <>
          <RiMenuFold4Line
            onClick={() => toggleSidebar()}
            className="h-5 w-5 text-white cursor-pointer"
          />
        </>
      )}
    </div>
  );
};

export default NavHeader;
