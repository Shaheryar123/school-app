import React from 'react'
import { Avatar } from '@material-ui/core'
import './Student.css'

const Student = ({students}) => {
    return (
        <div className='studentContainer'>
            <div className='students'>
            <table>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Gender</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>Contact No</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) =>
                        <tr>
                            <td >{<Avatar style={{marginLeft:'40px'}}/>}</td>
                            <td>{student.rollNo}</td>
                            <td>{ student.name}</td>
                            <td>{student.fatherName}</td>
                            <td>{ student.gender}</td>
                            <td>{ student.class}</td>
                            <td>{ student.section}</td>
                            <td>{ student.contactNo}</td>
                            

                    </tr>
                    )}
                </tbody>
            </table>
            </div>
            </div>
    )
}

export default Student
