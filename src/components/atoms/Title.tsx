import React from 'react';

interface TitleProps {
  theme?: TitleThemes[];
  children?: React.ReactNode;
  propStyle?: {};
}

export enum TitleThemes {
}

enum ModifierClassNames {
}


const Title: React.FC<TitleProps> = ({theme = [], children, propStyle = {}}) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <h1 className={["title", modifierClasses].join(' ')} style={propStyle}>
      {children}
      <style jsx>
        {`
          .title{ 
          }
        `}
      </style>
    </h1>
  );
}

export default Title;