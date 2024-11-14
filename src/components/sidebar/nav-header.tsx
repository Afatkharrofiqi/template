import { RiMenuUnfold4Line } from "react-icons/ri";
import { useSidebar } from "../ui/sidebar";

const NavHeader = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="grid grid-cols-1 pt-1 pb-2 px-2.5 md:grid-cols-4 group-data-[collapsible=icon]:md:grid-cols-1">
      <RiMenuUnfold4Line
        onClick={() => toggleSidebar()}
        className="h-6 w-6 text-white hidden md:block cursor-pointer group-data-[collapsible=icon]:rotate-[-180deg] transition-transform duration-200"
      />
      <img
        className="mx-auto w-[120px] md:mx-0 md:mr-2 md:col-span-3 md:max-w-[120px] group-data-[collapsible=icon]:opacity-0"
        src="/minehaul-white.png"
        alt="logo"
      />
    </div>
  );
};

export default NavHeader;
