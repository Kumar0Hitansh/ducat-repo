import React, { Fragment } from 'react'
import Mynav from '../shares/Mynav'

function Landingpage() {
    return (
        <Fragment>
        <Mynav/>
        <div className='container cus-mt'>
            <div className='row'>
                <div className='col-12'>
                    <p>Home page / landing page</p>
                </div>
                <section className='row'>
                    <div className='col-md-3'>
                        <div className="card text-bg-primary mb-3">
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Primary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card text-bg-info mb-3">
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Primary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card text-bg-danger mb-3">
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Primary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card text-bg-success mb-3">
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Primary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </section>
                

            </div>
        </div>
        </Fragment>
    )
}

export default Landingpage