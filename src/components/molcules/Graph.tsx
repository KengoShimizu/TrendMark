import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
// common
import CommonStyle from 'common/CommonStyle';
import { KeyToObj, NumToDay } from 'common/Function';
// type
import TimeLineData from '../../types/TimeLineData';

interface GraphProps {
  data: TimeLineData[] | undefined;
  width: number;
  height: number;
  selectedKey: string;
}

const Graph: React.FC<GraphProps> = ({data, width, height, selectedKey}) => {
  const highlight_obj = KeyToObj(selectedKey);

  const CustomTooltip = ({ active, payload, label }: any, highlight_obj: {type: string, value: any} | undefined) => {
    if (active && label && payload) {
      const day = NumToDay(payload[0].payload.day);

      return (
        <div className="custom-tooltip">
          <p className="row"><span className="label">Date:</span> {label}</p>
          <p className={`row ${day} ${highlight_obj?.type === day && 'highlight'}`}><span className="label">Day:</span> {day}</p>
          <p className="row"><span className="label">Value:</span> {payload[0].value}</p>
          <style jsx>{`
            .custom-tooltip{
              background-color: ${CommonStyle.Background1};
              border-radius: 5px;
            }
            .row{
              margin: 10px;
            }
            .highlight{
              color: ${CommonStyle.SecondColor} !important;
            }
            .label{
              color: ${CommonStyle.TextBlack};
            }
            .Sunday{
              color: ${CommonStyle.Sunday};
            }
            .Saturday{
              color: ${CommonStyle.Saturday};
            }
          `}</style>
        </div>
      );
    }
  
    return null;
  };
  
  return (
    <>
      <LineChart
        width={width}
        height={height}
        data={data}
        style={{margin: '0 auto'}}
      >
        <XAxis dataKey="date" type="category" interval={20}/>
        <Tooltip content={(data) => CustomTooltip(data, highlight_obj)}/>
        <CartesianGrid stroke={CommonStyle.Background2} />
        {highlight_obj?.type == 'day' 
          ? data?.filter(x => x.day === 1).map((x,i) => <ReferenceLine x={x.date} stroke={CommonStyle.SecondColor} key={`ReferenceLine${i}`}/>)
          : highlight_obj?.type == 'firstdate' 
            ? data?.filter(x => parseInt(x.date.substr(4,2)) === 1).map((x,i) => <ReferenceLine x={x.date} stroke={CommonStyle.SecondColor} key={`ReferenceLine${i}`}/>)
            : null
        }
        <Line type="monotone" dataKey="value" stroke={CommonStyle.AccentColor} dot={false} activeDot={false}/>
      </LineChart>
      <style jsx>{`
      `}</style>
    </>
  );
}

export default Graph;