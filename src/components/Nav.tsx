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
        <div className="flex">
          <div className="w-2/12">Logo</div>
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
