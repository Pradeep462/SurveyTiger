import React from 'react';

            
    const Option = ({addOption, uid , updateText , deleteOption}) => {
    return (
        <>
            <div className="col-md-8 offset-md-2 col-12 input-group my-3">
                <input type="text" className="form-control" placeholder="Option Text" onChange={e => {updateText(uid , e.target.value)}}/>
                 <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={addOption}>+</button>
                    <button className="btn btn-outline-secondary" type="button" onClick={deleteOption}>-</button>
              </div>
                 </div> 
        </>
    );
};

export default Option;