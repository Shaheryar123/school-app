import './Dashboard.css'
import { Person } from '@material-ui/icons';
import { School } from '@material-ui/icons';
import IncomeAndExpense from './IncomeAndExpense'
const Dashboard = () =>
{
    return (
        <div className ='dashboard'>
            <p>Home . <strong>Admin</strong></p>
            <div className='dashboardRecords'>
                <div className='dashboardRecord'>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <School />
                        <p>Students</p>
                        </div>
                    <h2>2000</h2>
                </div>
                
                <div className='dashboardRecord'>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Person />
                        <p>Teachers</p>
                        </div>
                <h2>80</h2>
                </div>
                <div className='dashboardRecord'>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Person />
                        <p>Other Staff</p>
                        </div>
                <h2>40</h2>
                </div>
            </div>
            <div >
                <IncomeAndExpense/>
            </div>
        </div>
    )
}

export default Dashboard

