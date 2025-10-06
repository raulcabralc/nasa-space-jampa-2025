import {
  Header404,
  Link404,
  NotFoundContainer,
  Paragraph404,
} from "./NotFound.styled";

function NotFound() {
  return (
    <NotFoundContainer>
      <Header404>404</Header404>
      <Paragraph404>The page you were looking for does not exist.</Paragraph404>
      <Link404 href="/">Go back to home page</Link404>
    </NotFoundContainer>
  );
}

export default NotFound;
