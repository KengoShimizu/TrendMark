import React from 'react';

interface TextProps {
  theme?: TextThemes[];
  children?: React.ReactNode;
  style?: string;
}

export enum TextThemes {
  CUSTOM = 'CUSTOM',
}

enum ModifierClassNames {
  CUSTOM = 'custom',
}


const Text: React.FC<TextProps> = ({theme = [], children, style = ''}) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <p className={["text", modifierClasses].join(' ')}>
      {children}
      <style jsx>
        {`
          .text{
          }
          .custom{
            ${style}
          }
        `}
      </style>
    </p>
  );
}

export default Text;