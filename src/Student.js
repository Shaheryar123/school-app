import React from 'react'
import { Avatar } from '@material-ui/core'
import './Student.css'
import students from './Student.json'

const Student = () => {
    return (
        <div className='studentContainer'>
            <div className='students'>
            <strong>Photo</strong>
                        <strong>Roll No</strong>
                    <strong>Name</strong>
                        <strong>FatherName</strong>
                        <strong>Gender</strong>
                        <strong>Class</strong>
                        <strong>Section</strong>
                        <strong>Contact No</strong>
                
                </div>
            {
                students.map((student) =>
                    <div className='student'>   
                        <Avatar src={student.photo} />
                        <p>{ student.rollNo}</p>
                    <p>{student.name}</p>
                        <p>{student.fatherName}</p>
                        <p>{student.gender}</p>
                        <p>{student.class}</p>
                        <p>{student.section}</p>
                        <p>{student.contactNo}</p>
                    
                    </div>         )
            }
            
        </div>
    )
}

export default Student
