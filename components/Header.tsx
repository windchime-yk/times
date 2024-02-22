interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  const { title } = props;

  return (
    <header>
      <h1>
        <a href="/">{title}</a>
      </h1>
    </header>
  );
};
