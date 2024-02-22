export const Footer = () => {
  const correntYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        <small>&copy; {correntYear} WhyK</small>
      </p>
    </footer>
  );
};
