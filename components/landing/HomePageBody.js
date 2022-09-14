import React from 'react'

function HomePageBody() {
  return (
    <div>
      <section className='flexVid'>
        <div className='bodyPage'> 
          <div className='row d-flex justify-content-between'>
            <div className='col-xxl-4 bodyHeader'>
              <p className='header'>
                <span className='highlight'>Excellence</span><span> is our culture.</span><br/>
                <span>Our</span><span className='highlight'> Commitment.</span><br/>
              </p>
              <p className='sentence'>
                You’ll see it in the way we exchange ideas with you. 
                We find out what makes your eyes light up, then leverage the best tools in our arsenal to enhance it. 
                Using cutting edge virtual design and Building Information Modeling (BIM), 
                we are able to create visual space simulations to make more informed decisions and reduce errors that cost time and money.
              </p>
            </div>
            <div className='obj3d col-xxl-6 text-center border border-warning bg-primary'>
              3D OBJECT HERE
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePageBody