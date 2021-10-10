import { Avatar } from '@material-ui/core'
import { AddAPhoto } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import './CreateStudent.css'
const CreateStudent = () =>
{
    
    return (
        <div className= 'createStudent'>
            <div className= 'createStudentContainer'>
                <div className= 'createStudentPicture'>
                    <Avatar style={{ width: '10vw', height:'20vh' }}/>
                    <IconButton>
                <AddAPhoto />
                    </IconButton>
                    <h1>Student Admission Form</h1>
                    
                </div>
                <div className= 'createStudentForm'>
                    <form>
                        <div className='createStudentForm1stRow'>
                            <div>
                        <label>Name:</label>
                        <input type ='text' placeholder ='Enter Full Name'></input>
                            </div>
                            <div>
                        <label>Father Name:</label>
                        <input type ='text' placeholder ='Enter Father Name'></input>
                            </div>
                            <div>
                        <label>Age:</label>
                        <input type ='text' placeholder ='Enter Age'></input>
                        </div>
                        </div>
                        <div className='createStudentForm2ndRow'>
                        <div>
                        <label>Class:</label>
                        <input type ='text' placeholder ='Enter Class'></input>
                        </div>
                            <div>
                        <label>Section:</label>
                        <input type ='text' placeholder ='Enter Section'></input>
                            </div>
                            <div>
                        <label>Gender:</label>
                        <input type ='text' placeholder ='Enter Gender'></input>
                            </div>
                        
                        </div>
                        <div className='createStudentForm3rdRow'>
                            <div>
                        <label>E-mail:</label>
                        <input type ='text' placeholder ='Enter Email Adress'></input>
                            </div>
                            <div>
                        <label>Adress:</label>
                        <input type ='text' placeholder ='Enter Adress'></input>
                            </div>
                            <div>
                        <label>Cell No:</label>
                        <input type ='text' placeholder ='Enter Cell Number'></input>
                        </div>
                        </div>
                        
                                    
                        
                    </form>
                
                        <button className='createStudentbtn'>SUBMIT</button>
                
                </div>
            </div>
     
        </div>
    )
}

export default CreateStudent
