import React from 'react'

function CardList({ currEle }) {
    return (
        <div>
            <div className="card mb-2" key={currEle.id}>
                <div className="row g-5">
                    <div className="col-md-3">
                        <img src={`https://avatars.dicebear.com/v2/avataaars/${currEle.username}.svg?options[mood][]=happy`} className="img-fluid rounded-start" alt="Contact_pic" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{currEle.username}</h2>
                            <p className="h5">Email: {currEle.email}</p>
                            <p className="h5">phone: {currEle.phone}</p>
                            <p className="h5">Website: {currEle.website}</p>
                            <p className="h5">Company: {currEle.company.name}</p>
                            <p className="h5">Address: {currEle.address.city}{currEle.address.zip}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardList