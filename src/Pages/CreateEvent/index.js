import { useEffect, useState } from "react"
import { DatePicker, Space } from 'antd';
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { useNavigate } from 'react-router-dom'
// import moment from 'moment';

const { RangePicker } = DatePicker;

const uploader = new Uploader({
    // Get production API keys from Upload.io
    apiKey: "free"
});



const CreateEvent = () => {

    const history = useNavigate();

    const [NewEvent, setNewEvent] = useState({
        eventName: "",
        hostName: "",
        startDate: "",
        endDate: "",
        location: "",
        EventImage: ""
    })


    useEffect(() => {

        //When it get to this if localStorage has any event it will get loaded, In future we can get by API using ID or we can also send data through NavLink state

        const AllreadyAdded = JSON.parse(localStorage.getItem('EventAdded'))
        if (AllreadyAdded) {

            setNewEvent(AllreadyAdded)

        }

    }, [])


    const onChange = (value, dateString) => {
        setNewEvent({ ...NewEvent, startDate: dateString[0], endDate: dateString[1] });
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewEvent({ ...NewEvent, [name]: value })
    }

    const Submit = (e) => {
        e.preventDefault()
        console.log({ NewEvent })
        localStorage.setItem('EventAdded', JSON.stringify(NewEvent)) //to presist on refresh also
        history('/event')
    }



    return (
        <>
            <div className="h-100 Create-Event container p-3 p-md-5 ">
                <p className="fs-64 fw-700 fc-blue text-center">Add your Event</p>
                <p className="fs-24 fw-300 fc-Pink text-center mb-3 mb-lg-5"><i>Invite the people to have Fun</i></p>
                <form onSubmit={Submit} className="row">
                    <div className="mb-4 mx-auto col-12 col-md-6">
                        <label htmlFor="eventName" className="form-label fw-700">Event Name:</label>

                        <input
                            type="text"
                            className="form-control py-3 rounded"
                            id="eventName"
                            name="eventName"
                            value={NewEvent.eventName}
                            onChange={handleChange}
                            placeholder="Event Name"
                            required
                            minLength={5}
                        />
                    </div>
                    <div className="mb-4 mx-auto col-12 col-md-6">
                        <label htmlFor="hostName" className="form-label fw-700">Host Name:</label>


                        <input
                            type="text"
                            className="form-control py-3 rounded"
                            id="hostName"
                            name="hostName"
                            onChange={handleChange}
                            value={NewEvent.hostName}
                            placeholder="Host Name"
                            required
                            minLength={5}
                        />
                    </div>
                    <div className="mb-4 mx-auto position-relative col-12 col-md-6">
                        <label htmlFor="hostName" className="form-label fw-700">Host Name:</label>


                        <Space direction="vertical" size={12} >
                            <RangePicker
                                showTime={{
                                    format: 'HH:mm',
                                }}
                                format="YYYY-MM-DD HH:mm"
                                onChange={onChange}
                            />
                            {/* defaultPickerValue={[moment(NewEvent.startDate, 'YYYY-MM-dd HH:mm'), moment(NewEvent.endDate, 'YYYY-MM-dd HH:mm')]} */}
                        </Space>
                        {!(NewEvent.startDate && NewEvent.endDate) &&

                            <input
                                tabIndex={-1}
                                className="ReqFeild"
                                autoComplete="off"
                                value=''
                                required={true}
                            />
                        }
                    </div>
                    <div className="mb-4 mx-auto col-12 col-md-6">
                        <label htmlFor="location" className="form-label fw-700">Location:</label>


                        <input
                            type="text"
                            className="form-control py-3 rounded"
                            id="location"
                            name="location"
                            value={NewEvent.location}
                            onChange={handleChange}
                            placeholder="Location"
                            required
                        />
                    </div>
                    <div className="mb-4 mx-auto col-12 col-md-6">
                        <label htmlFor="EventImage" className="form-label fw-700">Event Photo:</label>
                        <UploadButton uploader={uploader}
                            options={{ multi: false }}
                            onComplete={files => {
                                setNewEvent({ ...NewEvent, EventImage: files[0].fileUrl })
                            }}>
                            {({ onClick }) =>
                                NewEvent.EventImage ? <div className="text-center">
                                    <img src={NewEvent.EventImage} alt="imag" className="w-100 mb-3" />
                                    <button type="button" className="btn btn-primary bg-Purple border-0 rounded p-3" id="EventImage" onClick={() => setNewEvent({ ...NewEvent, EventImage: "" })} >
                                        Remove Image
                                    </button>
                                </div> :
                                    <div className="d-flex flex-column w-100">
                                        <button type="button" className="bg-Purple border-0 py-3 fs-24 text-white rounded" id="EventImage" onClick={onClick}>
                                            Upload a file
                                        </button>

                                        {!NewEvent.EventImage && (
                                            <input

                                                tabIndex={-1}
                                                autoComplete="off"
                                                style={{ opacity: 0, height: 0 }}
                                                value={NewEvent.EventImage}
                                                required={true}
                                            />
                                        )}
                                    </div>
                            }
                        </UploadButton>

                    </div>
                    <button type="submit" className="btn_Create">Add Event</button>
                </form>
            </div>
        </>
    );
}

export default CreateEvent;