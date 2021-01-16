import CommonStyle from 'common/CommonStyle';
import React from 'react';

interface TextProps {
  theme?: TextThemes[];
  children?: React.ReactNode;
  style?: string;
}

export enum TextThemes {
  CUSTOM = 'CUSTOM',
  WHITE = 'WHITE',
  BOLD = 'BOLD',
}

enum ModifierClassNames {
  CUSTOM = 'custom',
  WHITE = 'white',
  BOLD = 'bold',
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
          .white{
            color: ${CommonStyle.TextWhite};
          }
          .bold{
            font-weight: bold;
          }
        `}
      </style>
    </p>
  );
}

export default Text;