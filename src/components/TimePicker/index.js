import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
    isEqual,
    isValid,
    // eachMinuteOfInterval,
    // differenceInMilliseconds,
    // startOfDay,
    // endOfDay,
    format,
} from 'date-fns';

class TimePicker extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentTime: new Date(),
            hours: 0,
            minutes: 0,
            typePicker: "",
        };

    }

    componentDidMount() {

        const {ranges, order} = this.props;
        /**
         * Определяем это стартовый TimePicker или конечный
         * @type {string}
         */
        const typePicker = order ? "end" : "start";

        const currentTime = typePicker === "end" ? ranges[0].endDate : ranges[0].startDate;

        this.setState({typePicker})
        this.setState({currentTime})
        this.setState({hours: currentTime.getHours()})
        this.setState({minutes: currentTime.getMinutes()})

    }

    componentDidUpdate(prevProps) {
        const {currentTime} = prevProps;

        // if (!isEqual(this.state.currentTime, this.props.currentTime)) {
        //     this.setState({value: this.formatDate(this.props)});
        // }
    }


    render() {
        const {hours, minutes} = this.state;

        return (

            <div className={classnames('rdrTimePicker')}>
                <span className={classnames('rdrTimePicker__label')}>Время</span>
                <input
                    value={hours}
                    className={classnames('custom-time__input-hours')}
                    type="number"
                    style={{
                        textAlign: "center",
                        fontSize: "16px",
                        width: "2.5em",
                    }}
                    onChange={(e) => {
                        e.preventDefault();
                        this.setState({hours: `${e.target.value}`});
                        this.props.onChangeTime({type: this.state.typePicker, hours: +e.target.value, minutes: this.state.minutes})

                    }}
                    min="0"
                    max="23"
                />
                <span className={classnames('rdrTimePicker__divider')}>:</span>

                <input
                    value={minutes}
                    className={classnames('custom-time__input-minutes')}
                    type="number"
                    style={{
                        textAlign: "center",
                        fontSize: "16px",
                        width: "2.5em",
                    }}
                    onChange={(e) =>{
                        e.preventDefault();
                        this.setState({minutes: `${e.target.value}`});
                        this.props.onChangeTime({type: this.state.typePicker, hours: this.state.hours, minutes: +e.target.value})
                    }}
                    min="0"
                    max="59"
                />
            </div>
        )
    }
}

TimePicker.propTypes = {
    value: PropTypes.object,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    dateOptions: PropTypes.object,
    dateDisplayFormat: PropTypes.string,
    className: PropTypes.string,
    update: PropTypes.func.isRequired,
};

TimePicker.defaultProps = {
    readOnly: true,
    disabled: false,
    dateDisplayFormat: 'MMM d, yyyy h:mma',
};

export default TimePicker;