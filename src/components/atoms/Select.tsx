import React from 'react';
// common
import CommonStyle from 'common/CommonStyle';

interface SelectProps {
  theme?: SelectThemes[];
  style?: string;
  name: string;
  options: {value: string, name: string}[];
}

export enum SelectThemes {
  CUSTOM = 'CUSTOM',
}

enum ModifierClassNames {
  CUSTOM = 'custom',
}

const Select: React.FC<SelectProps> = ({ theme = [], style = '', name, options }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <>
      <select
        className={["select", modifierClasses].join(' ')}
        name={name}
        id={name}>
        {options.map((obj) => <option value={obj.value}>{obj.name}</option>)}
      </select>
      <style jsx>
        {`
          .select{
            border-radius: 3px;
            border: 1px solid ${CommonStyle.BorderColor};
            box-sizing: border-box;
            transition: ${CommonStyle.Transition};
          }
          .select{
            outline: none;
            text-indent: 0.01px;
            text-overflow: '';
            background: none transparent;
            vertical-align: middle;
            font-size: inherit;
            color: inherit;
            appearance: button;
          }
          select option{
            background-color: #fff;
            color: #333;
          }
          .custom{
            ${style}
          }
        `}
      </style>
    </>
  );
}

export default Select;