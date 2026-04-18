import Link from "next/link";

function LinkButton({ text, textAddOn, buttonAddOn, address }) {
  return (
    <Link href={address} className={buttonAddOn}>
      <div className={textAddOn}>{text}</div>
    </Link>
  );
}

export default LinkButton;
