import React, {Component} from 'react'
import {QRCodeCanvas } from "qrcode.react";
import html2canvas from 'html2canvas';
import './index.css'

class FirstTemplate extends Component{

    state = {imageUrl: ''}

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
          link.download = "student_id_template_1.png";
          link.href = canvas.toDataURL(imageUrl);
          link.click();
        });
      };

    render(){
        const {studentData} = this.props
        console.log(studentData)
        const studentDataJson = JSON.stringify(studentData)
        const {name,rollNo,rack,busRouteNumber,imageUrl,allergies} = studentData
        return(
          <div className='template-download-section'>
            <div className='template1-bg-container'  ref={this.idCardRef}>
                <div className='template1-heading-container'><h1 className='template-heading'>Identity card</h1></div>
                <div className='student-sub-card-container'>
                    <div className='student-info-bg-container'>
                        <li className='info'>Name:  <span className='spanInfo'>{name}</span></li>
                        <li className='info'>Roll No:  <span className='spanInfo'>{rollNo}</span></li>
                        <li className='info'>Rack:  <span className='spanInfo'>{rack}</span></li>
                        <li className='info'>Bus Route No: <span className='spanInfo'>{busRouteNumber}</span></li>
                        <li className='info'>Allergies: <span className='spanInfo'>{allergies.join(', ')}</span></li>
                    </div>
                    <div>
                        <img src = {imageUrl} alt="studentImage" className='profile-photo' /><br />
                        <QRCodeCanvas  value={studentDataJson} size={70} className="qr-code" />
                    </div>
                </div>
            </div>
            <div className='download-btn-section'><button type="button" onClick={this.handleDownload} className='download-btn'>Download</button></div>
          </div>
    )
    }
}

export default FirstTemplate