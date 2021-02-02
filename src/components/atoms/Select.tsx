import React from 'react';
// common
import CommonStyle from 'common/CommonStyle';

interface SelectProps {
  theme?: SelectThemes[];
  style?: string;
  name: string;
  options: {value: string, name: string}[];
  handleChange: any;
}

export enum SelectThemes {
  CUSTOM = 'CUSTOM',
}

enum ModifierClassNames {
  CUSTOM = 'custom',
}

const Select: React.FC<SelectProps> = ({ theme = [], style = '', name, options, handleChange }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <>
      <div className="select-wrap">
        <select
          className={["select", modifierClasses].join(' ')}
          name={name}
          id={name}
          onChange={handleChange} >
          {options.map((obj) => <option value={obj.value}>{obj.name}</option>)}
        </select>
      </div>
      <style jsx>
        {`
          .select-wrap{
            position: relative;
            display: inline;
          }
          .select-wrap:before{
            position: absolute;
            bottom: -5px;
            left: 0;
            content: '';
            display: block;
            width: 100%;
            height: 3px;
            background-color: ${CommonStyle.BorderColor};
          }
          .select-wrap:after {
            content: '';
            width: 6px;
            height: 6px;
            border: 0px;
            border-bottom: solid 2px #b4b3b3;
            border-right: solid 2px #b4b3b3;
            -ms-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            position: absolute;
            top: 50%;
            right: 10px;
            margin-top: -4px;
          }
          .select{
            appearance: none;
            outline: none;
            border: none;
            text-overflow: '';
            font-size: inherit;
            width: 80px;
            padding-left: 10px;
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