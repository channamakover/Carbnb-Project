import React,  { useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router';

//chosse the number of seats in the car
function HowMany(props) {
    return (

    <div>
    <Autocomplete className="auto-complete"
      id="combo-box-demo"
      options={seatOptions}
      getOptionLabel={(option) => option.title}
      style={{ width: 200 }}
      onInputChange={(event, newInputValue) => {
        props.setSeatsChoice(newInputValue);
    }}
     //onSubmit={()=>{history.push('/results',{searchWord:inputValue})}}
      renderInput={(params) => <TextField {...params} className="where-label" label="כמה מקומות" variant="outlined" />}
    />
    </div>
  );
}




const seatOptions=[{title:"5",id:1},
{title:"7",id:2},
{title:"9",id:3}]


export default HowMany
