import React from 'react';
// common
import CommonStyle from 'common/CommonStyle';

interface InputProps {
  theme?: InputThemes[];
  style?: string;
  name: string;
}

export enum InputThemes {
  CUSTOM_ = 'CUSTOM',
}

enum ModifierClassNames {
  CUSTOM = 'custom',
}

const Input: React.FC<InputProps> = ({ theme = [], style = '', name }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <>
      <input 
        className={["input", modifierClasses].join(' ')}
        type="text" 
        name={name}
        id={name}/>
      <style jsx>
        {`
          .input{
            border-radius: 3px;
            border: 1px solid ${CommonStyle.BorderColor};
            box-sizing: border-box;
            transition: ${CommonStyle.Transition};
          }
          .input:focus {
            border: 1px solid ${CommonStyle.AccentColor}; 
            box-shadow: 0 0 5px ${CommonStyle.AccentColor};
            z-index: 10;
            outline: 0;
          }
          .custom{
            ${style}
          }
        `}
      </style>
    </>
  );
}

export default Input;