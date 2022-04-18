import React from "react";

function render(){
    // Note: this is an escape hatch and should be used sparingly!
    // Normally we recommend using `import` for getting asset URLs
    // as described in “Adding Images and Fonts” above this section.
    return <img src={process.env.PUBLIC_URL + '/zxg.png'} />;
}

function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-5">
                        <img
                            className="rounded"
                            src="../zxg.png"
                            alt="Avatar of Professor Xuegong Zhang"
                            height="100px"
                        />
                        <img
                            className="rounded"
                            src="../fwl.png"
                            alt="Avatar of Professor Weili Fu"
                            height="100px"
                        />
                    </div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Contact</h1>
                        <p>
                            West China Sports Medicine Center of Sichuan University has developed into the
                            most influential comprehensive sports medicine center in the west of China,
                            integrating medical treatment, teaching and scientific research.
                            It is a national key training center for master and doctor students. At present,
                            the center has 2 professors and doctoral supervisors, 1 associate professor and 2
                            attending physicians. The annual outpatient volume is nearly 20,000, and the annual
                            operation volume is more than 15,000, ranking first in Sichuan province and leading
                            in western China.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;