import React from 'react';
// common
import CommonStyle from 'common/CommonStyle';

interface Props {
  children: React.ReactNode;
}

const GeneralTemplate: React.FC<Props> = ({children}) => {
  return (
    <>
      {children}
      <footer className='footer'>
        <img src='tree.png' width='600' height='556' className='tree' alt='tree'/>
      </footer>
      <style jsx>{`
        .footer{
          position: relative;
          width: 100%;
          height: 300px;
          background-color: ${CommonStyle.AccentColor};
        }
        .tree{
          position: absolute;
          bottom: 0;
          right: 0;
        }
      `}</style>
    </>
  );
}

export default GeneralTemplate;