import React from 'react';

interface TitleProps {
  theme?: TitleThemes[];
  children?: React.ReactNode;
  style?: string;
}

export enum TitleThemes {
  CUSTOM = 'CUSTOM',
}

enum ModifierClassNames {
  CUSTOM = 'custom',
}


const Title: React.FC<TitleProps> = ({theme = [], children, style = ''}) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <h1 className={["title", modifierClasses].join(' ')}>
      {children}
      <style jsx>
        {`
          .title{ 
          }
          .custom{
            ${style}
          }
        `}
      </style>
    </h1>
  );
}

export default Title;