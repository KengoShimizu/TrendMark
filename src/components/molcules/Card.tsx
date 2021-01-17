import React from 'react';
import { Search } from 'react-feather';
// common
import CommonStyle from 'common/CommonStyle';
// atom
import Button, {ButtonThemes} from '../atoms/Button';
import Input, {InputThemes} from '../atoms/Input';

interface SplitCardProps {
  children: React.ReactNode;
  width: number;
  margin?: string;
}

const Card: React.FC<SplitCardProps> = ({children, width, margin = ''}) => {
  return (
    <>
      <div className="container">
        {children}
      </div>
      <style jsx>{`
        .container{
          width: ${width}px;
          ${margin != '' && `margin: ${margin};`}
          background: ${CommonStyle.TextWhite};
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
        }
      `}</style>
    </>
  );
}

export default Card;