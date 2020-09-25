import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import DatePicker from '../datepicker/DatePicker';
import FrontPage from '../frontpage/FrontPage';
import { pushLocalStorage } from '../localStorageMechanism/localStorageMechanism';
import './booking.css';

const Booking = (props) => {

    const history = useHistory();
    const {label1, label2 } = props.type;
    const { register, handleSubmit, errors } = useForm();

    const [selectedDateFrom, setSelectedDateFrom] = React.useState(new Date('2014-08-18T21:11:54'));
    const [selectedDateTo, setSelectedDateTo] = React.useState(new Date('2014-08-18T21:11:54'));

   
    const onSubmit = () => {
        const stayDuration = ((selectedDateTo - selectedDateFrom) / (1000 * 3600 * 24));
        pushLocalStorage('stayDuration', stayDuration);
        history.push('/search');
    };

    return (
        <FrontPage type={props.type}>
            <div className="card-container card-alignment">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>{label1}</label><br />
                    <input className="input-design" name="example" defaultValue="" ref={register} placeholder = " Enter your origin" /><br />

                    <label>{label2}</label><br />
                    <input className="input-design" name="exampleRequired" ref={register({ required: true })} placeholder = " Enter your Destination"/><br />
                    {errors.exampleRequired && <span className="warning-color">This field is required</span>}


                    <div className="datepicker-container">
                        <div style={{ marginRight: '10px'}}>
                            <label>From</label>
                            <DatePicker type = "from" dateSateTo={[selectedDateTo, setSelectedDateTo]} dateSateFrom={[selectedDateFrom, setSelectedDateFrom]}></DatePicker>
                        </div>

                        <div>
                            <label>To</label>
                            <DatePicker type = "to" dateSateTo={[selectedDateTo, setSelectedDateTo]} dateSateFrom={[selectedDateFrom, setSelectedDateFrom]}></DatePicker>
                        </div>
                    </div>


                    <br />

                    <input className="button-color button-width" type="submit" value="Start booking" />
                </form>
            </div>
        </FrontPage>
    );
};

export default Booking;