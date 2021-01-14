import CommonStyle from 'common/CommonStyle';
import React from 'react';

interface ButtonProps {
  theme?: ButtonThemes[];
  children?: React.ReactNode;
  style?: string;
  onClick?: any;
}

export enum ButtonThemes {
  CUSTOM = 'CUSTOM',
}

enum ModifierClassNames {
  CUSTOM = 'custom',
}


const Button: React.FC<ButtonProps> = ({ theme = [], children, style = '', onClick }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <a className={["button", modifierClasses].join(' ')} onClick={onClick}>
      {children}
      <style jsx>
        {`
          .button{
            position: relative;
            display: inline-block;
            cursor: pointer;
            user-select: none;
            transition: all ${CommonStyle.Transition};
            text-align: center;
            vertical-align: middle;
            text-decoration: none;
            border-radius: 0.5rem;
            color: ${CommonStyle.TextWhite};
            background-color: ${CommonStyle.AccentColor};
          }
          .button:hover{
            color: ${CommonStyle.TextWhite};
            background: ${CommonStyle.SecondColor};
          }
          .custom{
            ${style}
          }
        `}
      </style>
    </a>
  );
}

export default Button;