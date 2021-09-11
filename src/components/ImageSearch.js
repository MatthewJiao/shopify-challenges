import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('test')
    searchText(text);
  }

  return (
    <div style = {searchStyle} className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form style = {searchContainerStyle} onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input style = {inputStyle} onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search ..." />
          <button style = {buttonStyle} className="rounded-md text-sm border-2 py-1 px-2" type="submit">
            Search
          </button>
        </div>
      </form>
		</div>
  )
}

const searchContainerStyle = {

}

const searchStyle = {
  marginTop: "5rem"
}

const buttonStyle = {
  color: "white",
  backgroundColor: "#6DCBC5",
  borderColor: "white",
  fontSize: "1rem",
  padding: "0.5rem"
}

const inputStyle = {
  color: "#6DCBC5",
  fontSize: "1.6rem",
  placeholder: { 
    color: "red",
    opacity: "1"
  }
  
}

export default ImageSearch;