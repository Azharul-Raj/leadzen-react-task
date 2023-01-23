import React, { useState } from 'react';

const SingleData = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { website, name,username, firstname, email, address, company, phone } = user;
    const {geo,city,street,suite } = address;
    return (
        <>
        {/* <div className='m-10'>
            <div tabIndex={0} className="collapse  border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    
                    <div className="grid grid-cols-5 place-items-center">
                        <div className="">
                            <h3>{id }</h3>
                        </div>
                        <div className="">
                            <h3>Name</h3>
                            <p>{ name}</p>
                        </div>
                        <div className="">
                            <h3>Email</h3>
                            <p>{ email}</p>
                        </div>
                        <div className="">
                            <h3>Company</h3>
                            <p>{ company.name}</p>
                        </div>
                        <div className="btn ">
                            <button className='collapse-plus collapse-open'>View Details</button>
                        </div>
    </div>
  </div>
  <div className="collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
            </div> */}
            {/* my custom */}
            <div className="m-10 border border-base-300 bg-white rounded-lg">
            <div className="grid grid-cols-5 place-items-center py-10">
                        <div className="">
                            <h3 className='font-bold uppercase'>Hello {username }</h3>
                        </div>
                        <div className="">
                            <h3 className='font-bold uppercase'>Name</h3>
                            <p>{ name}</p>
                        </div>
                        <div className="">
                            <h3 className='font-bold uppercase'>City</h3>
                            <p>{ address.city}</p>
                        </div>
                        <div className="">
                            <h3 className='font-bold uppercase'>Company</h3>
                            <p>{ company.name}</p>
                        </div>
                        <div className="btn ">
                            <button onClick={()=>setIsOpen(!isOpen)} className='collapse-plus collapse-open'>View Details</button>
                        </div>
                </div>
                {isOpen &&
                    <div className="lg:mx-20 p-10 rounded-lg my-5 lg:border-2">
                            <div className="">

                            <h1 className='font-bold uppercase'>Description</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum atque, eaque minus rerum molestias maxime sit, amet aperiam, voluptatem illo sapiente! Possimus, vel eveniet? Ipsam beatae, alias tempore ut libero quia accusantium soluta laudantium. Recusandae error molestias placeat laudantium.</p>
                            </div>
                        <div className="grid grid-cols-2 py-8 border-spacing-1">
                            {/* grid first col */}
                            <div className="flex flex-col justify-start">
                                <h4 className='font-bold'>Contact Person</h4>
                                <p>{ name}</p>
                                <h4 className='font-bold'>Emails</h4>
                                <p>{ email}</p>
                                <h4 className='font-bold'>Phones</h4>
                                <p>{ phone}</p>
                                <h4 className='font-bold'>website</h4>
                                <p>{ website}</p>
                            </div>
                            {/* grid second col */}
                            <div className="flex flex-col justify-start">
                            <h4 className='font-bold'>Address</h4>
                                <p>{street} { suite}</p>
                            <h4 className='font-bold'>City</h4>
                                <p>{ city}</p>
                            <h4 className='font-bold'>Location</h4>
                                <p>latitude : {geo.lat}, longitude : {geo.lng }</p>
                            <h4 className='font-bold'>Country</h4>
                                <p>India</p>
                            </div>
                    </div>
                </div>}
            </div>
            </>
    );
};

export default SingleData;