export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Portfolio</h2>
          <p>
          Contact us for all categories as listed below, according to your needs and also let
us handle your supply chain services
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <ul>
                        <li>{d.job1}</li>
                        <li>{d.job2}</li>
                        <li>{d.job3}</li>
                        <li>{d.job4}</li>
                        <li>{d.job5}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
