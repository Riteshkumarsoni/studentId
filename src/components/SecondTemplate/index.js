import React,{ Component }  from "react";
import {QRCodeCanvas } from "qrcode.react";
import html2canvas from 'html2canvas';
import './index.css'

class SecondTemplate extends Component{

    state = {imageUrl :''}
    constructor(props) {
            super(props);
            this.idCardRef = React.createRef();
    }

    componentDidMount(){
        const {studentData} = this.props
        const {imageUrl} = studentData
        this.setState({imageUrl})
    }

    handleDownload = () => {
    const element = this.idCardRef.current;
    if (!element) {
        console.error("ID Card element not found.");
        return;
        }
    const {imageUrl} = this.state
    html2canvas(element).then(canvas => {
        const link = document.createElement("a");
        link.download = "student_id_template_2.png";
        link.href = canvas.toDataURL(imageUrl);
        link.click();
    });
    };

    render(){
        const {studentData} = this.props
        const {name,rollNo,rack,busRouteNumber,imageUrl,allergies} = studentData
        return(
            <div className="second-template-main-section">
            <div className='second-template-bg-container' ref={this.idCardRef}>
            <div>
                    <h1 className='second-template-heading'>Identity Card</h1>
                    <div className="qr-code-container">
                        <img src={imageUrl} alt="student_img" className='student-img' />
                        <QRCodeCanvas value={JSON.stringify(studentData)} size={80} />
                    </div>
            </div>
            <div className='card'>
                    <div>
                        <p className='second-template-title'>Name </p>
                        <p className='second-template-title'>Roll No </p>
                        <p className='second-template-title'>Rack </p>
                        <p className='second-template-title'>Allergies </p>
                        <p className='second-template-title'>Bus Route No </p>
                    </div>
                    <div className='dash-section'>
                        <p className='second-template-title'>-</p>
                        <p className='second-template-title'>-</p>
                        <p className='second-template-title'>-</p>
                        <p className='second-template-title'>-</p>
                        <p className='second-template-title'>-</p>
                    </div>
                    <div>
                        <p className='value'>{name}</p>
                        <p className='value'>{rollNo}</p>
                        <p className='value'>{rack}</p>
                        <p className='value'>{allergies.join(', ')}</p>
                        <p className='value'>{busRouteNumber}</p>
                    </div>
            </div>
            
            </div>
            <div className='download-btn-section'><button type="button" onClick={this.handleDownload} className='download-btn'>Download</button></div>
            </div>
        )
    }
}

export default SecondTemplate


/*<p className='second-template-title'>Name :  <span className='value'>{name}</span></p>
                <p className='second-template-title'>Roll No :  <span className='value'>{rollNo}</span></p>
                <p className='second-template-title'>Rack :  <span className='value'>{rack}</span></p>
                <p className='second-template-title'>Name :  <span className='value'>{allergies.join(', ')}</span></p>
                <p className='second-template-title'>Bus Route No :  <span className='value'>{busRouteNumber}</span></p> */