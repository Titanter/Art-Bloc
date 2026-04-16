import Link from "next/link";

/*
    Note: Putting the color code directly into colorProperty soesnt work for some reason,
    so we're passing the entire bg-[(colorCode)] property instead

    
*/

function NavButton({ text, address, colorProperty }) {
  const className = `relative flex ${colorProperty} w-1/5 h-2/3 m-2 z-2 justify-center`;

  return (
    <Link href={address} className={className}>
      <div className="mt-2">{text}</div>
    </Link>
  );
}

export default NavButton;
