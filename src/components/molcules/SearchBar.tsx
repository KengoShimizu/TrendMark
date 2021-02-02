import React from 'react';
import { Search } from 'react-feather';
// common
import CommonStyle from 'common/CommonStyle';
// atom
import Button, {ButtonThemes} from '../atoms/Button';
import Input, {InputThemes} from '../atoms/Input';

interface SearchBarProps {
  style: string; 
  onChange: any;
  onSearch: any;
  word: string;
}

const search_btn = `
  border-radius: 35px;
  height: 3.5em;
  width: 3.5em;
`;

const search_input = `
  width: calc(100% - 4.5em);
  height: 80%;
  outline: none;
  border: none;
  font-size: 1.6em;
`;

const SearchBar: React.FC<SearchBarProps> = ({style, onChange, onSearch, word}) => {
  return (
    <>
      <div className="container">
        <Input name='search' placeholder='検索キーワードを入力' theme={[InputThemes.CUSTOM]} style={search_input} onChange={onChange} onKeyPress={onSearch}/>
        <Button theme={[ButtonThemes.CUSTOM]} style={search_btn} onClick={() => onSearch(word)}><Search size={28}/></Button>
      </div>
      <style jsx>{`
        .container{
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          background-color: ${CommonStyle.TextWhite};
          height: 4em;
          width: 600px;
          border-radius: 35px;
          ${style}
        }
      `}</style>
    </>
  );
}

export default SearchBar;