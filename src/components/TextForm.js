import React, {useState} from 'react'

export default function TextForm(props) {
  const [test, setTest] = useState("");

  const handleUpClick = () => {
    // console.log("Upper case was clicked" + test);
    let newTest = test.toUpperCase()
    setTest(newTest)
    props.showAlert("Converted to upper case!","success")
  }
  const handleLoClick = () => {
    // console.log("Upper case was clicked" + test);
    let newTest = test.toLowerCase()
    setTest(newTest)
    props.showAlert("Converted to lower case!","success")
  }

  const handleClearClick = () => {
    // console.log("Upper case was clicked" + test);
    let newTest = " "
    setTest(newTest)
    props.showAlert("Cleared the text!","success")

  }
  const handleCopyText = () => {
    // var text = document.getElementById('mybox');
    // text.select();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(test);
    // document.getSelection().removeAllRanges();
    props.showAlert("Text has been copied","success")

  }
  const handleExtraSpace = () => {
    // let newTest = test.split(/\s+/);
    let newTest = test.split(/[ ]+/);

    setTest(newTest.join(" "))
    props.showAlert("Removed exra spaces from the text","success")

  }
  const handleChange = (event) => {
    // console.log("Upper case was clicked");
    setTest(event.target.value)
  }
  return (
    <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2>{props.title}</h2>
            <div className="mb-3">
                <textarea className="form-control" value= {test} onChange={handleChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(28 68 99)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" disabled = {test.length == '0'} onClick={handleUpClick}>Convert to upercase</button>
            <button className="btn btn-primary mx-2" disabled = {test.length == '0'} onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary" disabled = {test.length == '0'} onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" disabled = {test.length == '0'} onClick={handleCopyText}> Copy Text</button>
            <button className="btn btn-primary mx-2" disabled = {test.length == '0'} onClick={handleExtraSpace}> Remove Etra Space</button>


        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>Text summary</h1>
            <p><b>{test.split(/\s+/).filter((item) => { return item.length !== 0}).length}</b> words, <b>{test.length}</b> characters</p>
            <p><b>{( 0.8/250) * test.split(" ").filter((item) => { return item.length !== 0}).length}</b> mintues to read</p>
            <h2>Preview</h2>
            <p>{test.length > 0 ? test : 'Enter something in above box to review it here!' }</p>
        </div>
    </>
  )
}
