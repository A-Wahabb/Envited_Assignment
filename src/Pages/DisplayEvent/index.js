import { useEffect, useState } from "react"
import location from "../../Assets/Images/Location.png"
import calender from "../../Assets/Images/Calender.png"
import Arrow from "../../Assets/Images/Arrow.png"
const DisplayEvent = () => {

    const [NewEvent, setNewEvent] = useState({
        eventName: "",
        hostName: "",
        startDate: "",
        endDate: "",
        location: "",
        EventImage: ""
    })


    useEffect(() => {

        const AllreadyAdded = JSON.parse(localStorage.getItem('EventAdded'))
        if (AllreadyAdded) {

            setNewEvent(AllreadyAdded)

        }



    }, [])

    const ReturnDate = (e) => {
        let formtDate = new Date(Date.parse(e))
        console.log({ formtDate, e })
        let rtnDate = formtDate.getDate() + ', ' + formtDate.toLocaleString('default', { month: 'long' }) + ' ' + formtDate.getFullYear() + ' ' + formtDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return rtnDate
    }

    return (
        <>
            <div className="EventDisplay h-100 container-sm  p-0 p-md-5">
                <div className="EventDisplay d-sm-flex justify-content-center align-items-center">

                    <div className="row w-100 m-0">
                        <div className="col-12 col-lg-6 order-2 order-lg-1 px-3">
                            <p className="fs-48 fc-Blue fw-700 mb-2" >{NewEvent.eventName}</p>
                            <p className="fc-lg-Grey fs-18">Hosted by <strong>{NewEvent.hostName}</strong></p>
                            <div className="mt-4">
                                <div className="d-flex w-75 mb-3">
                                    <div className="Icon_box d-flex justify-content-center align-items-center px-4 py-2 me-3">
                                        <img src={calender} alt="" />
                                    </div>
                                    <div>
                                        <p className="fs-18 fc-Blue fw-700 mb-1">{ReturnDate(NewEvent.startDate)}</p>
                                        <p className="fs-18 fc-Grey ">to <strong>{ReturnDate(NewEvent.endDate)}</strong></p>
                                    </div>
                                    <div className="ms-auto d-flex justify-content-center align-items-center">
                                        <img src={Arrow} alt="" />
                                    </div>
                                </div>
                                <div className="d-flex w-75 ">
                                    <div className="Icon_box d-flex justify-content-center align-items-center px-4 py-2 me-3">
                                        <img src={location} alt="" />
                                    </div>
                                    <div>
                                        <p className="fs-18 fc-Blue fw-700 mb-1">Street Name</p>
                                        <p className="fs-18 fc-Grey ">{NewEvent.location}</p>
                                    </div>
                                    <div className="ms-auto d-flex justify-content-center align-items-center">
                                        <img src={Arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center order-1 order-lg-2 px-0 px-md-3">
                            <img className="w-100" src={NewEvent.EventImage} alt="EventImage" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DisplayEvent;