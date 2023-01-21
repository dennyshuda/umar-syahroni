import { Container } from "./Container";

export function Nav() {
  const navLink = [
    {
      text: "Home",
      href: "/",
    },

    {
      text: "About",
      href: "#about",
    },
    {
      text: "Projects",
      href: "#projects",
    },
  ];

  return (
    <nav className="py-10 fixed left-0 top-0 w-full">
      <Container>
        <div className="flex items-center">
          <div className="w-2/12">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="18" r="18" fill="#45577B" />
              <path
                d="M17.4553 27.336C16.2873 27.336 15.2793 27.176 14.4313 26.856C13.5833 26.52 12.8793 26.064 12.3193 25.488C11.7753 24.896 11.3673 24.2 11.0953 23.4C10.8393 22.584 10.7113 21.688 10.7113 20.712V10.368H14.4553V20.4C14.4553 21.072 14.5273 21.648 14.6713 22.128C14.8313 22.592 15.0393 22.976 15.2953 23.28C15.5673 23.568 15.8873 23.776 16.2553 23.904C16.6393 24.032 17.0553 24.096 17.5033 24.096C18.4153 24.096 19.1513 23.816 19.7113 23.256C20.2873 22.696 20.5753 21.744 20.5753 20.4V10.368H24.3193V20.712C24.3193 21.688 24.1833 22.584 23.9113 23.4C23.6393 24.216 23.2233 24.92 22.6633 25.512C22.1033 26.088 21.3913 26.536 20.5273 26.856C19.6633 27.176 18.6393 27.336 17.4553 27.336Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="w-10/12 text-right">
            <ul className="space-x-10 text-secondary">
              {navLink.map((item) => {
                return (
                  <>
                    <a href={item.href}>{item.text}</a>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}
