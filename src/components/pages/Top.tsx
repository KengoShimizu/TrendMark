import React from 'react';
// organism
import TopSearch from '../organisms/TopSearch';
// template
import SampleTemplate from '../templates/SampleTemplate';


const Top: React.FC = (props: any) => {
  return (
    <>
      <div className="container">
        <SampleTemplate>
          <TopSearch/>
        </SampleTemplate>
      </div>
      <style jsx>{`
        .container{
        }
      `}</style>
    </>
  );
}

export default Top;