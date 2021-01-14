import React from 'react';
//atom
import Button, {ButtonThemes} from '../atoms/Button';
import Input, {InputThemes} from '../atoms/Input';
import TextArea, {TextAreaThemes} from '../atoms/TextArea';
import Title, {TitleThemes} from '../atoms/Title';

const button_style = `
  padding: 10px;
  font-weight: bold;
  font-size: 1.5em;
`;

const Top: React.FC = (props: any) => {
  return (
    <>
      <div className="container">
        <Button theme={[ButtonThemes.CUSTOM]} style={button_style}>sample</Button>
        <br/>
        <Input name='sample'/>
        <br/>
        <TextArea name='sample' cols={3} rows={4} maxLength={200} placeholder='sample'/>
        <br/>
        <Title>Sample</Title>
      </div>
      <style jsx>{`
        .container{
        }
      `}</style>
    </>
  );
}

export default Top;