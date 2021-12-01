
import hse from './hse.png'
export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Procurement</h2>
          <p>We have the ability to anticipate what the client needs and proffer solutions to them.</p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='testimonial-content'>
                      <div className='testimonial-meta'> - {d.name} </div>
                      <p>"{d.text}"</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
        <div className='section-title text-center'>
          <h2>Gas monitors</h2>
          <p>We offer personnel and industrial Gas monitors that provides early warning of
            poisonous gases such as VOCs, H2S, CO, O2, SO2, SiH4, PH3, NH3, NO2, ASH3,
            SO2, Cl2, F2, ClO2, O3, and Combustibles Gas.</p> 
            <img src={hse} alt='hse' className="img-thumbnail"/>
            <p>
            We are also known for Gas Detectors sales, Calibration and Maintenance of fixed and personal gas detector systems using audible alarms, visual warning lights,
            capable of operating in the harshest environment, with flame arrestors and coatings which make them water repellent. Also, splash guards are available for
            use in very wet environments. Portable gas detection instruments are high tech personal protection equipment (PPE) to provide personal safety of your
            employees and facilities. 
            </p>
            <p>We provide support with an extensive service system, thus guaranteeing
continuity of safety. Core Products include Fall Arrest Systems, Rescue and
Evacuation Systems, High Performance Clothing’s.</p>
        </div>
      </div>
    </div>
  )
}
