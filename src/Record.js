import { Person } from '@material-ui/icons';
import { School } from '@material-ui/icons';
import './Record.css'
const Record = () => {
    return (
        <div>
              <div className='Records'>
                <div className='Record'>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <School />
                        <p>Students</p>
                        </div>
                    <h2>2000</h2>
                </div>
                
                <div className='Record'>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Person />
                        <p>Teachers</p>
                        </div>
                <h2>80</h2>
                </div>
                <div className='Record'>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Person />
                        <p>Other Staff</p>
                        </div>
                <h2>40</h2>
                </div>
            </div>
        </div>
    )
}



export default Record
