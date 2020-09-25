import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const DatePicker = (props) => {

    const [selectedDateFrom, setSelectedDateFrom] = props.dateSateFrom;
    const [selectedDateTo, setSelectedDateTo] = props.dateSateTo;

    const handleDateChange = (date) => {
        props.type === 'from' ?
            setSelectedDateFrom(date) :
            setSelectedDateTo(date)
    };

    return (
        <div>
            <MuiPickersUtilsProvider style={{display: 'flex', flexDirection: 'row'}} utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        className="input-design"
                        style={{ paddingLeft: '10px', flex: '1', marginRight: '10px' }}
                        margin="normal"
                        format="MM/dd"
                        value={ props.type === 'from' ? selectedDateFrom : selectedDateTo}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        onChange={ handleDateChange }
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default DatePicker;