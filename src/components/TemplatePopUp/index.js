
import './index.css'

const TemplatePopUp = (props) => {
  const {templateClicked} = props
  
  const onTemplate1click = () =>{
    templateClicked(1)
  
  }

  const onTemplate2click = () =>{
    templateClicked(2)
  }

  return(
  <div className="template-bg-container">
      <h1 className='template-heading'>Choose any Template</h1>
      
        <button type="button" className='template-btn' onClick={onTemplate1click}>
          <img src="https://res.cloudinary.com/dh8g9mloe/image/upload/v1744216029/Template1_katjcc.avif" className='template-img' alt="template1" />
        </button>
      
      <button type="button" className='template-btn' onClick={onTemplate2click}>
        <img src="https://res.cloudinary.com/dh8g9mloe/image/upload/v1744216525/Template2_c65p32.avif" className='template-img' alt="template2" />
      </button>
  </div>
)
}

export default TemplatePopUp