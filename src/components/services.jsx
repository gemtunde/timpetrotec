export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            We offer a wide range of products and services aimed at improving safety, quality and reliability in the Marine, Energy and all major industries.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <>
                <div key={`${d.name}-${i}`} className='col-md-3' >
                  {' '}
                
                  <img
                   src={d.smallImage}
                   className='img-responsive'
                  alt={d.title}
                  style={{borderRadius : 20, height:150, width:350}}

                /></div>
               <div key={`${d.name}-${i}`} className='col-md-9' >
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
                </>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
