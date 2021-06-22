import { ButtonHTMLAttributes } from 'react';

//Estilização
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {

  return (
    <button className="button" {...props} />
  );
}