import React from 'react';
// common
import CommonStyle from 'common/CommonStyle';

interface TextAreaProps {
  theme?: TextAreaThemes[];
  style?: string;
  name: string;
  cols: number;
  rows: number;
  maxLength: number;
  placeholder?: string;
}

export enum TextAreaThemes {
  CUSTOM = 'CUSTOM',
}

enum ModifierClassNames {
  CUSTOM = 'custom',
}

const TextArea: React.FC<TextAreaProps> = ({ theme = [], style = '', name, cols, rows, maxLength, placeholder = '' }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <>
      <textarea 
        className={["textarea", modifierClasses].join(' ')}
        id={name} 
        name={name} 
        cols={cols} 
        rows={rows}
        maxLength={maxLength}
        placeholder={placeholder}/>
      <style jsx>
        {`
          .textarea{
            border-radius: 3px;
            border: 1px solid ${CommonStyle.BorderColor};
            box-sizing: border-box;
            transition: ${CommonStyle.Transition};
          }
          .textarea:focus {
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

export default TextArea;