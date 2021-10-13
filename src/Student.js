import React from 'react'
import { Avatar } from '@material-ui/core'
import './Student.css'

const Student = ({heading,body}) => {
    return (
        <div className='studentContainer'>
           <table style={{ width: 500 }}>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map(row => <th>{row}</th>)}
                </tbody>
            </table>       
            
        </div>
    )
}

export default Student
