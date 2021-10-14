import './AllStudents.css'
import Student from './Student'
import students from './Student.json'

const AllStudents = () =>
{

    return (

        <div className='allStudents'>
            <p>Home . <strong>Students</strong></p>
            <Student students={ students}/>
                      </div>
        
    )
}

export default AllStudents
