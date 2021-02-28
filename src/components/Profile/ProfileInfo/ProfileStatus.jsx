import React from 'react';
import c from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        isEdit: false,
        status: this.props.status
    }

    setInEdit = () => {
        this.setState( {
            isEdit: true
        } )
    }
    setNoEdit = () => {
        this.setState ( {
            isEdit: false,
        } )
        this.props.setStatusThunk(this.state.status);
    }
    statusChanged = (e) => {
        this.setState ( {
            status: e.currentTarget.value
        } )
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState ( {
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {console.log(React.version)}
                {!this.state.isEdit &&
                    <div >
                        <span onDoubleClick={this.setInEdit}>{this.props.status ? this.props.status : "Hey yo"}</span></div>}
                {this.state.isEdit &&
                    <input onChange={this.statusChanged} autoFocus onBlur={this.setNoEdit} 
                    value={this.state.status}></input>}
        </div>
        )
    }
}

export default ProfileStatus;