import { Container } from "./Container";

export function Footer() {
  const newDate = new Date();
  const getYear = newDate.getFullYear();
  return (
    <footer className="bg-white py-10">
      <Container>
        <div className="w-full text-center">
          <p>© {getYear} umarsyahroni. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
