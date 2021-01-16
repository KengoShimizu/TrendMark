import React from 'react';
import { ChevronsDown } from 'react-feather';
// common
import CommonStyle from 'common/CommonStyle';
// atom
import Button, {ButtonThemes} from '../atoms/Button';
import Input, {InputThemes} from '../atoms/Input';
import TextArea, {TextAreaThemes} from '../atoms/TextArea';
import Text, {TextThemes} from '../atoms/Text';
// molcule
import SearchBar from '../molcules/SearchBar';

const top_copy = `
  font-size: ${CommonStyle.TextSize36};
`;

const bottom_copy = `
  font-size: ${CommonStyle.TextSize18};
`;

const TopSearch: React.FC = (props: any) => {
  return (
    <>
      <div className="container">
        <div className="main-content">
          <div className="top-main">
            <Text theme={[TextThemes.CUSTOM, TextThemes.WHITE, TextThemes.BOLD]} style={top_copy}>あなたの事業宣伝、”いつ”しますか？</Text>
            <SearchBar style='margin: 80px auto 0; '/>
            <Text theme={[TextThemes.CUSTOM, TextThemes.WHITE]} style={bottom_copy}>検索ワードは曜日や祝日と高い関連性を持ちます<br/>世界のトレンドに規則を見つけよう</Text>
          </div>
          <div className="chevrons-down">
            <ChevronsDown size={100} strokeWidth={1} stroke={CommonStyle.TextWhite}/>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container{
        }
        .main-content{
          position: relative;
          background-image: url('night-time-shibuya-img.jpg');
          min-height: 100vh;
          width: 100%;
          text-align: center;
        }
        .top-main{
          min-width: 700px;
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%, -35%);
        }
        .chevrons-down{
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
        }
      `}</style>
    </>
  );
}

export default TopSearch;