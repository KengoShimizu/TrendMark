import React from 'react';

interface ButtonProps {
  theme?: ButtonThemes[];
  children?: React.ReactNode;
  style?: {};
  onClick?: any;
}

export enum ButtonThemes {
  SAMPLE = 'SAMPLE',
}

enum ModifierClassNames {
  SAMPLE = 'sample',
}


const Button: React.FC<ButtonProps> = ({ theme = [], children, style = {}, onClick }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <button className={["button", modifierClasses].join(' ')} style={style} onClick={onClick}>
      {children}
      <style jsx>
        {`
          .button{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .sample{}
        `}
      </style>
    </button>
  );
}

export default Button;