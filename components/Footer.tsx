export const Footer = () => {
  const correntYear =
    Temporal.Now.zonedDateTimeISO(Temporal.TimeZone.from("Asia/Tokyo"))
      .toPlainDate().year;

  return (
    <footer>
      <p>
        <small>&copy; {correntYear} WhyK</small>
      </p>
    </footer>
  );
};
