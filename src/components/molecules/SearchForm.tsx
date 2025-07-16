import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import '../component.css';
import { useFormik } from 'formik';
import { MagnifyingGlassIcon, CalendarIcon, PersonIcon } from '@radix-ui/react-icons';
import { ShineBorder } from '../magicui/shine-border';

const validate = (values: any) => {
    const errors: any = {};
    if (!values.destination) {
        errors.destination = 'Destination is required';
    }
    if (!values.checkin) {
        errors.checkin = 'Check-in date is required';
    }
    if (!values.checkout) {
        errors.checkout = 'Check-out date is required';
    }
    if (values.checkin && values.checkout && values.checkin > values.checkout) {
        errors.checkout = 'Check-out must be after check-in';
    }
    if (!values.guests || values.guests < 1) {
        errors.guests = 'At least 1 guest required';
    }
    return errors;
};

const SearchForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            destination: '',
            checkin: '',
            checkout: '',
            guests: 1,
        },
        validate,
        onSubmit: (values) => {
            console.log('Form submitted', values);
        },
    });

    return (
        <div className="searchFormCard">
            <ShineBorder shineColor={["#004C23", "#00CC00", "#FFBE7B"]} />
            <form onSubmit={formik.handleSubmit} className="searchForm" style={{ position: 'relative', zIndex: 1 }}>
                <div className="searchFormFullWidth" style={{ position: 'relative', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ width: '100%', position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <MagnifyingGlassIcon style={{ position: 'absolute', left: 16, width: 22, height: 22, color: '#04A14F' }} />
                        <Input
                            name="destination"
                            placeholder="Choose a destination"
                            value={formik.values.destination}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{ paddingLeft: 40 }}
                        />
                    </div>
                    {formik.touched.destination && formik.errors.destination && (
                        <div style={{ color: '#e53e3e', fontSize: 14, width: '100%', marginTop: 2, textAlign: 'left', paddingLeft: 4 }}>{formik.errors.destination}</div>
                    )}
                </div>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ width: '100%', position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <CalendarIcon style={{ position: 'absolute', left: 16, width: 22, height: 22, color: '#04A14F' }} />
                        <Input
                            type="date"
                            name="checkin"
                            placeholder="Check in"
                            value={formik.values.checkin}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{ paddingLeft: 40 }}
                        />
                    </div>
                    {formik.touched.checkin && formik.errors.checkin && (
                        <div style={{ color: '#e53e3e', fontSize: 14, width: '100%', marginTop: 2, textAlign: 'left', paddingLeft: 4 }}>{formik.errors.checkin}</div>
                    )}
                </div>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ width: '100%', position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <CalendarIcon style={{ position: 'absolute', left: 16, width: 22, height: 22, color: '#04A14F' }} />
                        <Input
                            type="date"
                            name="checkout"
                            placeholder="Check out"
                            value={formik.values.checkout}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{ paddingLeft: 40 }}
                        />
                    </div>
                    {formik.touched.checkout && formik.errors.checkout && (
                        <div style={{ color: '#e53e3e', fontSize: 14, width: '100%', marginTop: 2, textAlign: 'left', paddingLeft: 4 }}>{formik.errors.checkout}</div>
                    )}
                </div>
                <div className="guestsInputFullWidth" style={{ position: 'relative', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ width: '100%', position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <PersonIcon style={{ position: 'absolute', left: 16, width: 22, height: 22, color: '#04A14F' }} />
                        <Input
                            type="number"
                            name="guests"
                            min={1}
                            placeholder="Guests"
                            value={formik.values.guests}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{ paddingLeft: 40 }}
                        />
                    </div>
                    {formik.touched.guests && formik.errors.guests && (
                        <div style={{ color: '#e53e3e', fontSize: 14, width: '100%', marginTop: 2, textAlign: 'left', paddingLeft: 4 }}>{formik.errors.guests}</div>
                    )}
            </div>
                <div className="searchFormButtonArea">
                    <Button className="searchFormButton" type="submit">
          Book now
        </Button>
      </div>
         </form>
        </div>
);
};

export default SearchForm;