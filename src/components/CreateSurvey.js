import React, { useState } from 'react';
import TypeSelector from './TypeSeletor';
import Questions from './Questions'
import Option from './Option'
import { useHistory } from 'react-router';

const CreaterSurvey = ({setSquestion , squestion}) => {

   const history = useHistory();
   const getRandom = () => {return Math.floor((Math.random()*1000) + 1);}
   const defaultOptionState = [{uid: getRandom(), value: ''},{uid: getRandom(), value: ''}];
   const [qText , setQtext] = useState('');
   const [qType , setQtype] = useState(0);
   const [options , setOptions] = useState(defaultOptionState);

  const addOption = () => {
    let newOption = {
      uid: getRandom(),
      value: ''
    }
    let updatedOption = [...options];
    updatedOption.push(newOption);
    setOptions(updatedOption);  

  }

  const deleteOption = () => {
   if(options.length >= 3){
     let updatedOption = [...options];
    updatedOption.pop();
    setOptions(updatedOption);
   }
  }

  const updatedOptionText = (id , text) => {
    let updatedOption = [...options];
    let changeIndex = updatedOption.findIndex(x => x.uid === id);
    updatedOption[changeIndex].value = text;
    setOptions(updatedOption);
  }

  const updateSurveyQuestion = () => {
    let newSurveyQuestion = [...squestion];
    let newq = {
      qtext : qText,
      qtype : qType,
      options : options
    }
    newSurveyQuestion.push(newq);
    setSquestion(newSurveyQuestion);
    setQtype(0);
    setQtext('');
    setOptions(defaultOptionState);

  }

   const publish = () => {
       updateSurveyQuestion();
       history.push('/published');
   }
    
    return (
       <> 
           <TypeSelector qtype={qType} setQtype={setQtype} />
           
           {qType !== 0 ?
             <> 
             <Questions onTextUpdate={setQtext}/>
             {options.map((opt , key) => (
                
                   <Option 
                   key={key} 
                   uid={opt.uid}
                   addOption={addOption} 
                   deleteOption={deleteOption}
                   updateText={updatedOptionText}
                   />
                 
             ))}
                  <button className="btn btn-primary m-1" onClick={updateSurveyQuestion}>Add Questions</button>
                  <button className="btn btn-primary m-1" onClick={publish}>Publish</button> 
      
             </>
             : null }
           
         </>
    );
};

export default CreaterSurvey;