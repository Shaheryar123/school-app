import './AllStudents.css'
import Student from './Student'
import students from './Student.json'

const AllStudents = () =>
{
    var heading = ['Photo', 'Roll No', 'Name', 'Father Name', 'Gender', 'Class', 'Section', 'Contact No']
    var body = students
    return (

        <div className='allStudents'>
            <p>Home . <strong>Students</strong></p>
            <Student heading={heading} body={body}/>
                      </div>
        
    )
}

export default AllStudents
