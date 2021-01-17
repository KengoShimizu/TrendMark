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
  CENTER = 'CENTER',
  SIZE64 = 'SIZE64',
  SIZE48 = 'SIZE48',
  SIZE36 = 'SIZE36',
  SIZE24 = 'SIZE24',
  SIZE18 = 'SIZE18',
  SIZE16 = 'SIZE16',
  SIZE14 = 'SIZE14',
  SIZE12 = 'SIZE12',
}

enum ModifierClassNames {
  CUSTOM = 'custom',
  WHITE = 'white',
  BOLD = 'bold',
  CENTER = 'center',
  SIZE64 = 'size64',
  SIZE48 = 'size48',
  SIZE36 = 'size36',
  SIZE24 = 'size24',
  SIZE18 = 'size18',
  SIZE16 = 'size16',
  SIZE14 = 'size14',
  SIZE12 = 'size12',
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
          .center{
            text-align: center;
          }
          .size64{
            font-size: ${CommonStyle.TextSize64};
          }
          .size48{
            font-size: ${CommonStyle.TextSize48};
          }
          .size36{
            font-size: ${CommonStyle.TextSize36};
          }
          .size24{
            font-size: ${CommonStyle.TextSize24};
          }
          .size18{
            font-size: ${CommonStyle.TextSize18};
          }
          .size16{
            font-size: ${CommonStyle.TextSize16};
          }
          .size14{
            font-size: ${CommonStyle.TextSize14};
          }
          .size12{
            font-size: ${CommonStyle.TextSize12};
          }
        `}
      </style>
    </p>
  );
}

export default Text;