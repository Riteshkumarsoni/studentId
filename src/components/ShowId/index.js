import Header from '../Header'
import FirstTemplate from '../FirstTemplate'
import SecondTemplate from '../SecondTemplate'
import './index.css'

const ShowId = () => {
    const stringifiedlist = localStorage.getItem('studentIdList')
    let parsedData;
    if(stringifiedlist !== null){
        parsedData = JSON.parse(stringifiedlist)
    }
    else{
        parsedData = []
    }
    
    return (
        <>
            <Header />
            {parsedData.length === 0 ? <div className='no-data-found-container'><img src="https://res.cloudinary.com/dh8g9mloe/image/upload/v1743871604/GithubVisualizer/jftmuuiiyukv1cdrvbtd.png" className='no-id-found-img' alt="notId" /> </div>:
            <div className='main-container'>
            <div className='student-id-bg-container'>
                {
                    parsedData.map(eachItem => (
                        <>
                            <FirstTemplate key={eachItem.uniqueId} studentData={eachItem} />
                        </>
                    ) )
                }
            </div>
            <div className='student-id-bg-container'>
                {
                    parsedData.map(eachItem => (
                        <>
                            <SecondTemplate key={eachItem.uniqueId} studentData={eachItem} />
                        </>
                    ) )
                }
            </div>
            </div>}
        </>
    )
}

export default ShowId