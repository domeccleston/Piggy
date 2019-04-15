import React from 'react';
import content from '../../locale/default';

const goalContent = content.saveGoal;

/**
 * HTML5 validation:
 * min max (max is MAX_SAFE_INTEGER)
 * pattern match to only allow whole numbers, no decimals
 */
class GoalForm extends React.Component{

    state = {
        name: '',
        amount: 0
    }

    handleGoalSubmit = (event) => {
        event.preventDefault();
        this.props.afterGoalSubmit({
            name: this.state.name,
            currency: 'GBP',
            target:{
                currency: 'GBP',
                minorUnits: (this.state.amount * 100)
            },
            base64EncodedPhoto: "notset"
        });
        return false;
      }

    render() {
        return (
            <div>
                <div className="row" style={{ paddingTop: '50px' }}>
                    <div className="ui two column centered grid">
                        <div className="column">
                            <div className="ui divider"></div>
                            <h2 className="ui header">
                               Create a new goal
                            </h2>
                            <form className="ui fluid form" onSubmit={(e) => {this.handleGoalSubmit(e);}}>
                                <div className="field">
                                    <input 
                                        type="text"
                                        pattern="[A-Za-z0-9 ]+" 
                                        title={goalContent.name.validation} 
                                        name="name" 
                                        placeholder={goalContent.name.placeHolder}
                                        value={this.state.name}
                                        onChange={e => { this.setState({name: e.target.value})}}
                                        required/>
                                    <div className="ui pointing label">
                                        {goalContent.name.label}
                                    </div>
                                </div>                                
                                <div className="ui right labeled input">
                                    <label htmlFor="amount" className="ui label">£</label>
                                    <input 
                                        type="number"
                                        min="1" 
                                        max={Number.MAX_SAFE_INTEGER}
                                        pattern="[1-9]+\d"
                                        title={goalContent.amount.validation}
                                        name="amount" 
                                        value= {this.state.amount}
                                        onChange = {e => { this.setState({ amount: e.target.value})}}
                                        placeholder={goalContent.amount.placeHolder} 
                                        required 
                                        id="amount"
                                        />
                                    <div className="ui basic label">.00</div>
                                </div>
                                <div className="ui divider"></div>
                                <div className="field">
                                    <button type="submit" className="large teal ui button">{goalContent.submit}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GoalForm;