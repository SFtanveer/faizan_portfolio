import Link from "next/link";

const NavLink = ({ href, title }) => {

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-[#ADB7BE]"
    >
      {title}
    </Link>
  );
};

export default NavLink;