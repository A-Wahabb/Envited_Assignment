import Event from '../../Assets/Images/Event.png'
import Button from '../../Atoms/Button';
import classes from "./Landing.module.css"


const Landing = () => {
    return (
        <>
            <div className="main d-flex justify-content-center align-items-center p-3 p-md-5">
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-12 col-md-9 col-lg-6 order-2 order-lg-1 mx-auto">
                            <img className={`d-block mx-auto ${classes.EventImg}`} src={Event} alt="" />
                        </div>
                        <div className="col-12 col-md-9 col-lg-6 d-flex align-items-center order-1 order-lg-2 mx-auto">
                            <div className={`text-center text-lg-end ${classes.txtPart}`}>
                                <p className="fs-64 fw-700 fc-Blue mb-0 lh-64">Imagine if
                                    <p className="fc-grad-Blue mb-0 lh-73"> Snapchat </p>
                                    had events.</p>
                                <p className="fs-24 fw-300 fc-Grey">Easily host and share events with your friends across any social media.</p>
                                <div className="d-none d-lg-block">
                                    <Button
                                        classes={classes.btn_Create}
                                        text="🎉 Create my event" />
                                </div>
                            </div>
                        </div>
                        <div className="d-lg-none col-12 order-3 text-center">
                            <Button
                                classes={classes.btn_Create}
                                text="🎉 Create my event" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;