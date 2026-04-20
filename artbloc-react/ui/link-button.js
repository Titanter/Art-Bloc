import Link from "next/link";

function LinkButton({
  text = "",
  textAddOn = "",
  buttonAddOn = "",
  address = "/",
  newTab = false,
}) {
  let component;

  if (newTab == true) {
    component = (
      <Link href={address} target="_blank" className={buttonAddOn}>
        <div className={textAddOn}>{text}</div>
      </Link>
    );
  } else {
    component = (
      <Link href={address} className={buttonAddOn}>
        <div className={textAddOn}>{text}</div>
      </Link>
    );
  }

  return component;
}

export default LinkButton;
