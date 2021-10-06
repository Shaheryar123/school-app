import React from 'react'
import './IncomeAndExpense.css'
import { IconButton } from '@material-ui/core'
const IncomeAndExpense = () =>
{
    return (
        <div className = 'feeContainer'> 
            <h4>Fees Collection and Expenses</h4>
            <div className = 'feeDes'>
                <div className='feeDesLeft'>
                
                    <div className='feeDesLeftElement'>
                        <strong>$ 10,000</strong>
                        <p>Collections</p>
                    </div>
                    <div className='feeDesLeftElement'>
                        <strong>$ 8,000</strong>
                        <p>Fees</p>
                    </div>
                    <div className='feeDesLeftElement'>
                        <strong>$ 4,000</strong>
                        <p>Expenses</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default IncomeAndExpense
