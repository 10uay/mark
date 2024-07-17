export default function Logo() {
  return (
    <div>
      <img
        src="/images/logo-light.svg"
        alt="logo"
        className="w-20 md:w-28 dark:hidden"
      />
      <img
        src="../../public/images/logo-dark.svg"
        alt="logo"
        className="w-20 md:w-28 dark:inline-block hidden"
      />
    </div>
  );
}
