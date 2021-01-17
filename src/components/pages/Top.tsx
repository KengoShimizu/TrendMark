import React from 'react';
// common
import CommonStyle from 'common/CommonStyle';
// organism
import TopSearch from '../organisms/TopSearch';
// template
import GeneralTemplate from '../templates/GeneralTemplate';


const Top: React.FC = (props: any) => {
  return (
    <>
      <div className="container">
        <GeneralTemplate>
          <TopSearch/>
        </GeneralTemplate>
      </div>
      <style jsx>{`
        .container{
          background-color: ${CommonStyle.Background1};
        }
      `}</style>
    </>
  );
}

export default Top;