import React, {useState} from 'react'   // 'useState' is a React Hook. Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed. Hooks allow us to "hook" into React features such as state and lifecycle methods.You must import Hooks from react. Here we are using the useState Hook to keep track of the application state. State generally refers to application data or properties that need to be tracked. There are 3 rules for hooks: 1.Hooks can only be called inside React function components. 2.Hooks can only be called at the top level of a component. 3.Hooks cannot be conditional
import PropTypes from 'prop-types'

export default function TextTools(props) {

    const [text, setText] = useState(''); //In the useState hook. const [text, setText] in which 'text' is the initial value written inside useState(''). 'text' value can be changed as per the value written as 'setText('.....')' this is known as the setText property.
    
    const [wordCount, setWordCount] = useState(0);

    const handleonChange = (event) => {
        console.log('OnChange is working');
        setText(event.target.value);   // 'event.target.value' targets the 'value={text}' in the text area so by use of which user can type in the textarea.
      
        const wordsArray = event.target.value.trim().split(/\s+/); // Counting words without spaces
        const currentWordCount = wordsArray.length;
        setWordCount(currentWordCount);
    }

    const toUppercase = (event) => {
        event.preventDefault();
        console.log('Uppercase was clicked ' + text);
        let  newText = text.toUpperCase();
        setText(newText)  
        props.showAlert('changed to Uppercase!', 'success') 
    }

    const toLowercase = (event) => {
        event.preventDefault();
        console.log('Lowercase was clicked ' + text);
        let  newText = text.toLowerCase();
        setText(newText)   
        props.showAlert('changed to Lowercase!', 'success') 
    }

    const clearClick = (event) => {
        event.preventDefault();
        let newText = '';
        setText(newText)
        props.showAlert('Text Cleared!', 'success') 
    }

    const copyClick = (event) => {
        event.preventDefault();
        var text = document.getElementById('text');
        text.select(text);
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied!', 'success') 
    }

    const removeSpaces = (event) => {
        event.preventDefault();
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Space Removed!', 'success') 
    }


    const sbtBtn = (event) => {
        event.preventDefault();
        console.log('Submit button is clicked');
        props.showAlert('Form is Submitted', 'success')
    }


    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    };



    return (
        <>
        <div className="container mb-5" >
            
                <div className="mt-4" >
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={props.formStyle}><h3>{props.heading}</h3></label>
                    <textarea className="form-control" id="text" rows="5" value={text} onChange={handleonChange} placeholder="Enter text here" style={props.txtArea}></textarea>  {/*value={text} : here 'text' returns the text given to the setTest as per the SetText property */}

                    
                    <button type="submit" className="btn btn-secondary my-3 mx-2" disabled={text.length===0} onClick={toUppercase}>Convert to Uppercase</button>
                    <button type="submit" className="btn btn-secondary my-3 mx-2" disabled={text.length===0} onClick={toLowercase}>Convert to Lowercase</button>
                    <button type="submit" className="btn btn-secondary my-3 mx-2" disabled={text.length===0} onClick={removeSpaces}>Remove Extra Spaces</button>
                    <button type="submit" className="btn btn-secondary my-3 mx-2" disabled={text.length===0} onClick={copyClick}>Copy Text</button>
                    <button type="submit" className="btn btn-secondary my-3 mx-2" disabled={text.length===0} onClick={clearClick}>Clear Textarea</button>
                    
                    
                    
        

                    <div className="container mb-5" style={props.formStyle}>
                        <h5>Your text summary</h5>
                        <p>{wordCount} {wordCount === 1 ? 'word' : 'words'} and {text.length} characters</p>
                        <p>{0.008 * text.split(" ").length} Minutes to read the above text</p> 
                        <h4>Preview</h4>
                        <p>{text}</p>
                    </div>  
                
            
                
                
                    <div className="mb-3" style={props.formStyle}>
                        <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" style={props.txtArea} aria-describedby="emailHelp" rows='8'/>
                    </div>
                    
                    <div className="mb-3" style={props.formStyle}>
                        <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" style={props.txtArea}/>We asure your privacy
                    </div>
                    
                    <div className="my-3 mt-4 form-check" style={props.formStyle}>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" sstyle={{ marginRight: '5px' }} checked={isChecked}onChange={handleCheckboxChange}/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    
                    <button type="submit" className="btn btn-secondary" onClick={sbtBtn} disabled={!isChecked}>Submit</button>
                </div>
            </div>
        
        </>
    )
}





TextTools.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
  };
  
  
  /* defaultProps : these are set incase you have mentioned props in the code are forgot to pass the values so that these can remind you of the empty props. 
    These can be also used to set the default props and need not to be sent the value. */
  
TextTools.defaultProps = {  
    title: 'set title here',
    about: 'set about text here'
};
    
