import React /*, { value, handleChange }*/ from 'react'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import Form from '@material-ui/core/FormLabel';

class Quiz extends React.Component {

    state = {
        question1: 'none',
        question2: 'none',
        question3: 'none',
        question4: 'none',
        question5: 'none',
        question6: 'none',
        question7: 'none',
        question8: 'none',
        question9: 'none'
    };

   handleChange = key => (event, value) => {
        event.preventDefault()

        this.setState({
          [key]: value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      }


    render() {
        console.log(this.state)

        const { question1, question2, question3, question4, question5, question6, question7, question8, question9 } = this.state;

        return (
            <div>
                <FormControl component="fieldset">
                    <FormLabel>1. Little interest or pleasure in doing things</FormLabel>
                    <RadioGroup row aria-label="question1" name="question1" value={question1} onChange={this.handleChange('question1')}>
                    <FormControlLabel value="Not at all" control={<Radio />} label="Not at all" labelPlacement="top"/>
                    <FormControlLabel value="Several days" control={<Radio />} label="Several days" labelPlacement="top"/>
                    <FormControlLabel value="More than half the days" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                    <FormControlLabel value="Nearly every day" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                    </RadioGroup>
                </FormControl> 
                <FormControl component="fieldset">
                    <FormLabel>2. Feeling down, depressed, or hopeless</FormLabel>
                    <RadioGroup row aria-label="question2" name="question2" value={question2} onChange={this.handleChange('question2')}>
                    <FormControlLabel value="Not at all" control={<Radio />} label="Not at all" labelPlacement="top"/>
                    <FormControlLabel value="Several days" control={<Radio />} label="Several days" labelPlacement="top"/>
                    <FormControlLabel value="More than half the days" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                    <FormControlLabel value="Nearly every day" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel>3. Trouble falling or staying asleep, or sleeping too much</FormLabel>
                    <RadioGroup row aria-label="question3" name="question3" value={question3} onChange={this.handleChange('question3')}>
                    <FormControlLabel value="Not at all" control={<Radio />} label="Not at all" labelPlacement="top"/>
                    <FormControlLabel value="Several days" control={<Radio />} label="Several days" labelPlacement="top"/>
                    <FormControlLabel value="More than half the days" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                    <FormControlLabel value="Nearly every day" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel>4. Feeling tired or having little energy</FormLabel>
                    <RadioGroup row aria-label="question4" name="question4" value={question4} onChange={this.handleChange('question4')}>
                    <FormControlLabel value="Not at all" control={<Radio />} label="Not at all" labelPlacement="top"/>
                    <FormControlLabel value="Several days" control={<Radio />} label="Several days" labelPlacement="top"/>
                    <FormControlLabel value="More than half the days" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                    <FormControlLabel value="Nearly every day" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel>5. Poor appetite or overeating</FormLabel>
                    <RadioGroup row aria-label="question5" name="question5" value={question5} onChange={this.handleChange('question5')}>
                    <FormControlLabel value="Not at all" control={<Radio />} label="Not at all" labelPlacement="top"/>
                    <FormControlLabel value="Several days" control={<Radio />} label="Several days" labelPlacement="top"/>
                    <FormControlLabel value="More than half the days" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                    <FormControlLabel value="Nearly every day" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel>6. Feeling bad about yourself – or that you are a failure or have let yourself or your family down</FormLabel>
                    <RadioGroup row aria-label="question6" name="question6" value={question6} onChange={this.handleChange('question6')}>
                    <FormControlLabel value="Not at all" control={<Radio />} label="Not at all" labelPlacement="top"/>
                    <FormControlLabel value="Several days" control={<Radio />} label="Several days" labelPlacement="top"/>
                    <FormControlLabel value="More than half the days" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                    <FormControlLabel value="Nearly every day" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel>7. Trouble concentrating on things, such as reading the newspaper or watching television</FormLabel>
                    <RadioGroup row aria-label="question7" name="question7" value={question7} onChange={this.handleChange('question7')}>
                    <FormControlLabel value="Not at all" control={<Radio />} label="Not at all" labelPlacement="top"/>
                    <FormControlLabel value="Several days" control={<Radio />} label="Several days" labelPlacement="top"/>
                    <FormControlLabel value="More than half the days" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                    <FormControlLabel value="Nearly every day" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel>8. Moving or speaking so slowly that other people could have noticed? Or the opposite – being so fidgety or restless that you have been moving around a lot more than usual</FormLabel>
                    <RadioGroup row aria-label="question8" name="question8" value={question8} onChange={this.handleChange('question8')}>
                    <FormControlLabel value="Not at all" control={<Radio />} label="Not at all" labelPlacement="top"/>
                    <FormControlLabel value="Several days" control={<Radio />} label="Several days" labelPlacement="top"/>
                    <FormControlLabel value="More than half the days" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                    <FormControlLabel value="Nearly every day" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel>9. Thoughts that you would be better off dead or of hurting yourself insome way</FormLabel>
                    <RadioGroup row aria-label="question9" name="question9" value={question9} onChange={this.handleChange('question9')}>
                    <FormControlLabel value="Not at all" control={<Radio />} label="Not at all" labelPlacement="top"/>
                    <FormControlLabel value="Several days" control={<Radio />} label="Several days" labelPlacement="top"/>
                    <FormControlLabel value="More than half the days" control={<Radio />} label="More than half the days" labelPlacement="top"/>
                    <FormControlLabel value="Nearly every day" control={<Radio />} label="Nearly every day" labelPlacement="top"/>
                    </RadioGroup>
                </FormControl>
            </div>
        )
    }
  } 

  export default Quiz;