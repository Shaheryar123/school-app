import './Dashboard.css'
import Record from './Record'
import IncomeAndExpense from './IncomeAndExpense'
const Dashboard = () =>
{
    return (
        <div className ='dashboard'>
            <p>Home . <strong>Admin</strong></p>
            <div>
                <Record />
            </div>
          
            <div >
                <IncomeAndExpense/>
            </div>
        </div>
    )
}

export default Dashboard

