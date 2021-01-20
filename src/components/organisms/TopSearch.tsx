import React, { useState } from 'react';
import { ChevronsDown } from 'react-feather';
import axios from 'axios';
// common
import CommonStyle from 'common/CommonStyle';
// atom
import Text, {TextThemes} from '../atoms/Text';
// molcule
import SearchBar from '../molcules/SearchBar';
import Card from '../molcules/Card';
import Graph from '../molcules/Graph';
// type
import TimeLineData from '../../types/TimeLineData';
import { useEffect } from 'react';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const TopSearch: React.FC = (props: any) => {
  const [gData, setGdata] = useState<TimeLineData[] | undefined>(undefined);

  useEffect(() => {
    axios.get('http://localhost:3000/google-trends')
      .then(function (response) {
          // handle success
          setGdata(response.data);
      })
      .catch(function (error) {
          // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="main-content">
        <div className="top-main">
          <Text theme={[TextThemes.CUSTOM, TextThemes.WHITE, TextThemes.BOLD, TextThemes.SIZE36]}>あなたの事業宣伝、”いつ”しますか？</Text>
          <SearchBar style='margin: 80px auto 0; '/>
          <Text theme={[TextThemes.CUSTOM, TextThemes.WHITE, TextThemes.SIZE18]}>検索ワードは曜日や祝日と高い関連性を持ちます<br/>世界のトレンドに規則を見つけよう</Text>
        </div>
        <div className="chevrons-down">
          <ChevronsDown size={100} strokeWidth={1} stroke={CommonStyle.TextWhite}/>
        </div>
      </div>

      <Text theme={[TextThemes.CENTER, TextThemes.BOLD, TextThemes.SIZE36, TextThemes.CUSTOM]} style='padding-top: 36px;'>社会的ランドマークで見る検索トレンド</Text>
      <Card width={600} margin='0 auto 132px auto'>
        <Graph data={gData} width={550} height={400}/>
        <Text theme={[TextThemes.SIZE18, TextThemes.CUSTOM]} style='width: 80%; margin: 0 auto; padding: 16px 0;'>
          人はある曜日や祝日に”特別”だと感じ、行動するようです<br/>
          <ul>
            <li>週のはじまりである月曜日</li>
            <li>月のはじまりである朔日（ついたち）</li>
            <li>土日とは違う祝日</li>
            <li>1年に一度の元旦</li>
          </ul>
          それは人間の行動に大きな影響を与えます<br/>
          文筆家であるダニエル・ピンクは<br/>
          そのような社会的に意味のある日を<br/>
          <br/>
          「<span className='text-bold'>社会的ランドマーク</span>」<br/>
          <br/>
          と名付けました
        </Text>
      </Card>

      <div className="section-container">
        <Text theme={[TextThemes.CENTER, TextThemes.BOLD, TextThemes.SIZE36]}>「社会的ランドマーク」の力</Text>
        <Card width={600} margin='0 auto'>
          <Text theme={[TextThemes.CENTER]}><img src='sample.png' width={500}/></Text>
          <Text theme={[TextThemes.SIZE18, TextThemes.CUSTOM]} style='width: 80%; margin: 0 auto; padding: 16px 0;'>
            アメリカ北東部のあるマンモス大学のジムにおいて<br/>
            1年分の学生利用データを分析した結果<br/>
            <ul>
              <li>新学期の始まり</li>
              <li>週明け</li>
              <li>月明け</li>
              <li>元日</li>
            </ul>
            の順に多くの学生がジムを利用したことが分かったのです<br/>
            <br/>
            このように<span className='text-bold'>社会的ランドマークが人間の行動に与える<br/>
            影響は大きく、分析する価値がある</span>のです<br/>
          </Text>
        </Card>
      </div>

      <style jsx>{`
        .section-container{
          background-color: ${CommonStyle.Background2};
          padding: 32px 0 132px 0;
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
        .text-bold{
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default TopSearch;