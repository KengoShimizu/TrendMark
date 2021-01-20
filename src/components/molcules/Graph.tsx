import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';
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
        {/* <XAxis dataKey="date" /> */}
        <XAxis dataKey="day" interval={6}/>
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
        {/* <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
      </LineChart>
      <style jsx>{`
      `}</style>
    </>
  );
}

export default Graph;