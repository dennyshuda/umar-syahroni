interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Container({ children }: Props) {
  return <div className="container mx-auto px-10">{children}</div>;
}
