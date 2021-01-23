import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
// common
import CommonStyle from 'common/CommonStyle';
// atom
import Button, {ButtonThemes} from '../atoms/Button';
import Input, {InputThemes} from '../atoms/Input';
// type
import TimeLineData from '../../types/TimeLineData';

interface GraphProps {
  data: TimeLineData[] | undefined;
  width: number;
  height: number;
}

const Graph: React.FC<GraphProps> = ({data, width, height}) => {
  
  return (
    <>
      <LineChart
        width={width}
        height={height}
        data={data}
        style={{margin: '0 auto'}}
      >
        <XAxis dataKey="date" type="category" interval={20}/>
        <Tooltip active={false}/>
        <CartesianGrid stroke={CommonStyle.Background2} />
        {data?.filter(x => x.day === 1).map((x,i) => <ReferenceLine x={x.date} stroke={CommonStyle.SecondColor} key={`ReferenceLine${i}`}/>)}
        <Line type="monotone" dataKey="value" stroke={CommonStyle.AccentColor} dot={false} activeDot={false}/>
      </LineChart>
      <style jsx>{`
      `}</style>
    </>
  );
}

export default Graph;