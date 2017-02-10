import React from 'react';

const Lyrics = (props) => {
    return (
        <form className='form-group' style={{marginTop: '20px'}}>
        <input
            className='form-control'
            placeholder="Enter artist name"
        />
        <input
            className='form-control'
            placeholder="Enter song name"
        />
        <pre>SOME EXISTING LYRICS</pre>
        <button className="btn btn-primary btn-block">Search</button>
        </form>
    );
}

export default Lyrics;

/*             onChange={}
            value={}
            */