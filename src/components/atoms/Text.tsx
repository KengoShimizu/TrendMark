import React from 'react';

interface TextProps {
  theme?: TextThemes[];
  children?: React.ReactNode;
  propStyle?: {};
}

export enum TextThemes {
}

enum ModifierClassNames {
}


const Text: React.FC<TextProps> = ({theme = [], children, propStyle = {}}) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <p className={["text", modifierClasses].join(' ')} style={propStyle}>
      {children}
      <style jsx>
        {`
          .text{
          }
        `}
      </style>
    </p>
  );
}

export default Text;