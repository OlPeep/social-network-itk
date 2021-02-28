import React, { useState, useEffect } from 'react';
import c from './ProfileInfo.module.css';

const ProfileStatusHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, editStatus] = useState(props.status);

    useEffect( () => {
        editStatus(props.status)
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true);
    }
    
    const deactiveEditMode = () => {
        setEditMode(false);
        props.setStatusThunk(status);
    }

    const statusChanged = (e) => {
        editStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div onDoubleClick={activeEditMode}>
                    <span>{status}</span></div>}
            {editMode &&
                <input const onChange={statusChanged} autoFocus onBlur={deactiveEditMode} 
                value={status}></input>}
    </div>
    )
}

export default ProfileStatusHooks;