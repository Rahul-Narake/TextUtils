import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showMsg('Text converted to upper Case', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showMsg('Text converted to Lower Case', 'success');
  };

  const handleClearTxt = () => {
    setText('');
    props.showMsg('Text Cleared', 'success');
  };

  const handleCopyTxt = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showMsg('Text Copied to Clipboard', 'success');
  };

  const handleExtraSpaces = () => {
    let newTxt = text.split(/[ ]+/);
    setText(newTxt.join(' '));
    props.showMsg('extra spaces removed from text', 'success');
  };

  return (
    <>
      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === 'light' ? 'white' : '#222933',
          color: props.mode === 'light' ? 'black' : 'white',
        }}
      >
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : '#222933',
              color: props.mode === 'light' ? 'black' : 'white',
            }}
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          id="to_upper"
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert To UpeerCase
        </button>
        <button
          disabled={text.length === 0}
          id="to_lower"
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowClick}
        >
          Convert To LowerCase
        </button>
        <button
          disabled={text.length === 0}
          id="clr_text"
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearTxt}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          id="copy_text"
          className="btn btn-primary mx-2"
          onClick={handleCopyTxt}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          id="copy_text"
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === 'light' ? 'white' : '#222933',
          color: props.mode === 'light' ? 'black' : 'white',
        }}
      >
        <h2>Your text summery</h2>
        <p>
          {text.charAt(0) === ''
            ? 0
            : text.split(' ').filter((element) => {
                return element.length !== 0;
              }).length}
          <b> Word</b> {text.length} <b>Characters</b>
        </p>
        <p>
          {text.charAt(0) === '' ? 0 : 0.008 * text.split(' ').length} Minutes
          to Read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Nothing to Preview'}</p>
      </div>
    </>
  );
}
