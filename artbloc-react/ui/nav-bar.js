import Link from "next/link";

function Header(){
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link href="/artists">
              <button>Artists</button>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <button>Events</button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <button>About</button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <button>Contact</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
