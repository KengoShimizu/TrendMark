import React from 'react';
// common
import CommonStyle from 'common/CommonStyle';

interface InputProps {
  theme?: InputThemes[];
  style?: string;
  placeholder?: string;
  focus?: boolean;
  onChange: any;
  onKeyPress?: any;
  name: string;
}

export enum InputThemes {
  CUSTOM = 'CUSTOM',
}

enum ModifierClassNames {
  CUSTOM = 'custom',
}

const Input: React.FC<InputProps> = ({ theme = [], style = '', name, placeholder = '', focus = false, onChange, onKeyPress }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <>
      <input 
        className={["input", modifierClasses].join(' ')}
        type="text" 
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        onKeyPress={e => {if (e.key == 'Enter') onKeyPress(e.currentTarget.value)}}/>
      <style jsx>
        {`
          .input{
            border-radius: 3px;
            border: 1px solid ${CommonStyle.BorderColor};
            box-sizing: border-box;
            transition: ${CommonStyle.Transition};
          }
          .input:focus {
            ${focus && `
              border: 1px solid ${CommonStyle.AccentColor}; 
              box-shadow: 0 0 5px ${CommonStyle.AccentColor};
              z-index: 10;
              outline: 0;
            `}
          }
          input:-webkit-autofill {
              box-shadow: 0 0 0 1000px ${CommonStyle.TextWhite} inset;
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