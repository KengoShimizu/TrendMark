import React from 'react';
// organism
import SampleOrganism from '../organisms/SampleOrganism';
// template
import SampleTemplate from '../templates/SampleTemplate';


const Top: React.FC = (props: any) => {
  return (
    <>
      <div className="container">
        <SampleTemplate>
          <SampleOrganism/>
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