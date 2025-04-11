import {Component} from 'react'
import Popup from 'reactjs-popup'
import TemplatePopUp from '../TemplatePopUp'
import './index.css'
import FirstTemplate from '../FirstTemplate'
import SecondTemplate from '../SecondTemplate'
import Header from '../Header'

class Home extends Component{
    state = {flag: false, name: '', rollNo: '', classStudent: '', division: '', allergies: [], imageUrl: '', rack: '', busRouteNumber: '', templateId: ''}

    onGetFile = async (event) => {
        const file = event.target.files[0];
        if(file){
            const imageUrl = URL.createObjectURL(file)
            this.setState({imageUrl})
        }


        // You add cloud_name and unsigned_preset to make your image live on the cloudinary

        /*if(!file) return;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'unsigned_preset'); // replace with your unsigned preset
        formData.append('cloud_name', 'cloud_name'); // replace with your Cloudinary cloud name

        const res = await fetch('https://api.cloudinary.com/v1_1/dh8g9mloe/image/upload', {
        method: 'POST',
        body: formData,
        });

        const data = await res.json();
        this.setState({imageUrl: data.secure_url})*/
        
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value})
    }
    onChangeRollNo = (event) => {
        this.setState({rollNo: event.target.value})
    }

    onchangeClass = (event) => {
        this.setState({classStudent: event.target.value})
    }

    onChangeDivision = (event) => {
        this.setState({division: event.target.value})
    }

    onChangeAllergies = (event) => {
        const {allergies} = this.state
        if(event.target.checked){
            this.setState(prevState => ({allergies: [...prevState.allergies, event.target.value]}))
        }
        else{
            const updatedData = allergies.filter(eachItem => eachItem !== event.target.value)
            this.setState({allergies: updatedData})
        }
    }

    onChangeRack = (event) => {
        this.setState({rack: event.target.value})
    }

    onChangeBusRouteNumber = (event) => {
        this.setState({busRouteNumber: event.target.value})
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        const {name,rollNo,imageUrl} = this.state
        if(!name || !rollNo || !imageUrl){
            this.setState({flag: true})

        }
        else{
            this.setState({flag: false})
        }
    }

    renderClassAndDivision = () => {
        const {classStudent, division} = this.state
        return(
        <div className='select-class-division-container input-section'>
            <div>
                <label className='labelEl'>Class</label><br />
                <select className='class-select' value={classStudent} onChange={this.onchangeClass}> 
                <option value="Nur" className='optionEl' selected>Select Class</option>
                    <option value="Nur" className='optionEl'>Nur</option>
                    <option value="Class1" className='optionEl'>Class1</option>
                    <option value="Class2" className='optionEl'>Class2</option>
                    <option value="Class3" className='optionEl'>Class3</option>
                </select>
            </div>
            <div className='selectEl-subcard'>
                <label className='labelEl'>Division</label><br />
                <select className='class-select' value={division} onChange={this.onChangeDivision}> 
                <option value="Nur" className='optionEl' selected>Select Division</option>
                    <option value="A" className='optionEl'>A</option>
                    <option value="B" className='optionEl'>B</option>
                    <option value="C" className='optionEl'>C</option>
                    <option value="D" className='optionEl'>D</option>
                </select>
            </div>
        </div>
    )
}


    renderAllergiesAndImage = () => {
        const {imageUrl} = this.state
        return (
        <div className='allergies-img-container'>
            <div className='input-section'>
                <label className='labelEl'>Allergies</label><br />
                <div className='checkboxEl-section'>
                    <input type="checkbox" className='textboxEl' id="Bee Stings" value="Bee Stings" onChange={this.onChangeAllergies}/> 
                    <label className='checkboxLabelEl' htmlFor="Bee Stings">Bee Stings</label>
                </div>
                <div className='checkboxEl-section'>
                    <input type="checkbox" className='textboxEl' id="Latex" value="Latex"  onChange={this.onChangeAllergies} /> 
                    <label className='checkboxLabelEl' htmlFor="Latex">Latex</label>
                </div>
                <div className='checkboxEl-section'>
                    <input type="checkbox" className='textboxEl' id="Dust Mites" value="Dust Mites"  onChange={this.onChangeAllergies} /> 
                    <label className='checkboxLabelEl' htmlFor="Dust Mites">Dust Mites</label>
                </div>
                <div className='checkboxEl-section'>
                    <input type="checkbox" className='textboxEl' id="Pet Dander" value="Pet Dander" onChange={this.onChangeAllergies} /> 
                    <label className='checkboxLabelEl' htmlFor="Pet Dander">Pet Dander</label>
                </div>
                <div className='checkboxEl-section'>
                    <input type="checkbox" className='textboxEl' id="Other" value="Other"  onChange={this.onChangeAllergies}/> 
                    <label className='checkboxLabelEl' htmlFor="Other">Other</label>
                </div>
            </div>
            <div className='imageLabel-container'>
                <label className='labelEl' htmlFor='image'>Choose Your Img</label><br />
                <input type="file" className='imageFile' id="image" onChange={this.onGetFile} />
            </div>
            <div>
                {imageUrl.length > 0 && <img src={imageUrl} alt="student_image" className='student-image' />}
            </div>
        </div>
        )
    }

    renderRackandBusRoute = () => {
        const {rack, busRouteNumber} = this.state
        return(
        <div className='select-rack-bus-route-container'>
            <div className='input-section'>
                <label className='labelEl' htmlFor='rack'>Rack</label><br />
                <input type="text" className='inputEl' id="rack" value={rack} onChange={this.onChangeRack} />
            </div>
            <div className='selectEl-subcard'>
                <label className='labelEl'>Bus Route Number</label><br />
                <select className='class-select' value={busRouteNumber} onChange={this.onChangeBusRouteNumber}> 
                <option value="Nur" className='optionEl' selected>Select Bus Route Number</option>
                    <option value="111" className='optionEl'>111</option>
                    <option value="115" className='optionEl'>115</option>
                    <option value="117" className='optionEl'>117</option>
                    <option value="119" className='optionEl'>119</option>
                </select>
            </div>
        </div>
        )
    }

    templateClicked = (id) => {
        
        const {allergies,name,rollNo, classStudent, rack, busRouteNumber,division,imageUrl} = this.state
        let existingDataArray = localStorage.getItem('studentIdList')
        console.log(existingDataArray)
        let studentList = [];
        console.log(existingDataArray)
        if(!existingDataArray ){
            existingDataArray = []
            studentList = []

        }else{
            studentList = JSON.parse(existingDataArray)
        }
        
        let uniqueNo = studentList.length + 1;
        const newDataForLocalStorage = {uniqueId:uniqueNo, allergies,name,rollNo, classStudent, rack, busRouteNumber,division,imageUrl}
        studentList.push(newDataForLocalStorage)
        console.log(studentList)
        localStorage.setItem("studentIdList", JSON.stringify(studentList))
        this.setState({templateId: id})
       
    }

    render(){
        const {allergies,name,rollNo, classStudent, rack, busRouteNumber,division,imageUrl,templateId,flag} = this.state
        const studentData = {allergies,name,rollNo, classStudent, rack, busRouteNumber,division,imageUrl}
        if(templateId === 1){
            return <FirstTemplate studentData={studentData} />
        }

        if(templateId === 2){
            return <SecondTemplate studentData={studentData} />
        }

        return (
            <>
                <Header />
                <div className='student-home-bg-container'>
                    <img src="https://shorturl.at/Gzsi1" className='id-image' alt="studentID" />
                    <div className='form-subcard-container'>
                        <h1 className='student-form-heading'>Student Data Form</h1>
                        <form className='form-container' onSubmit={this.onSubmitForm}>
                            <div className='input-section'>
                                <label className='labelEl' htmlFor='name'>Name</label><br />
                                <input type="text" className='inputEl' id="name" value={name} onChange={this.onChangeName} onBlur={this.onNameBlur} />
                            </div>
                            <div className='input-section'>
                                <label className='labelEl' htmlFor='rollBumber'>Roll Number</label><br />
                                <input type="text" className='inputEl' id="rollBumber" value={rollNo} onChange={this.onChangeRollNo} />
                            </div>
                            {this.renderClassAndDivision()}
                            {this.renderAllergiesAndImage()}
                            {this.renderRackandBusRoute()}
                            <div className='btn-container'>
                                <Popup
                                modal
                                trigger={
                                    <button type="submit" className="submit-btn" onClick={this.onSubmitForm}>
                                        Submit
                                    </button>
                                }
                                >
                                {close => (
                                    <div className="template-popup-section">
                                    
                                    <div className='close-button'>
                                        <button
                                            type="button"
                                            className="trigger-button"
                                            onClick={() => close()}
                                        >
                                            Edit
                                        </button>
                                    </div>
                                    {flag ? <p className='error-msg'>Please Fill All The Required Value !!</p> :    <TemplatePopUp templateClicked={this.templateClicked} />}
                                    
                                    </div>
                                )}
                                </Popup>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Home






/*<div className='btn-container'>
                            <Popup
                            modal
                            trigger={
                                <button type="submit" className="submit-btn" onClick={this.onSubmitForm}>
                                    Submit
                                </button>
                            }
                            >
                            {close => (
                                <div className="template-popup-section">
                                
                                <div className='close-button'>
                                    <button
                                        type="button"
                                        className="trigger-button"
                                        onClick={() => close()}
                                    >
                                        X
                                    </button>
                                </div>
                                <TemplatePopUp templateClicked={this.templateClicked} />
                                </div>
                            )}
                            </Popup>
                        </div>*/