import React,{useState} from 'react';

interface ISearchPanel {
  visibleSearch:(searchText:string)=>void
}

const SearchPanel = ({visibleSearch}:ISearchPanel) => {
  const [searchText,setSearchText]=useState('');
  const onTextSearch=(event: {target: HTMLInputElement})=>{
      setSearchText(event.target.value)
  }
  return (
    <>
    <input type="text"onChange={onTextSearch} placeholder="поиск" />
    <button onClick={()=>visibleSearch(searchText)}>Найти</button>
    </>
  );
};

export default SearchPanel;