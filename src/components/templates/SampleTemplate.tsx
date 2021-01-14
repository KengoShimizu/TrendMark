import React from 'react';

interface Props {
  children: React.ReactNode;
}

const SampleTemplate: React.FC<Props> = ({children}) => {
  return (
    <>
      <div className="container">
        {children}
      </div>
      <style jsx>{`
        .container{
        }
      `}</style>
    </>
  );
}

export default SampleTemplate;