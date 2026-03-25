import Link from "next/link";

function Footer(){
  return (
    <footer>
      <h4> Navigation </h4>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/artists">Artists</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <h4> Contact </h4>
      <nav>
        <ul>
          <li>
            <Link href="/">Email</Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/artblocstudio/">Instagram</Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/profile.php?id=61579428009401">Facebook</Link>
          </li>
        </ul>
      </nav>

      <h4> Address </h4>
      <h5>TBD</h5>
      
    </footer>
  );
};

/*

TODO:

- Email link
- Insta & FB links to new window

*/

export default Footer;
