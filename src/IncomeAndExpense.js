import React from 'react'
import './IncomeAndExpense.css'
import incomeandexpense from './IncomeAndExpense.json'
const IncomeAndExpense = () =>
{
    const Chart = ({ children, width, height }) => (
        <svg viewBox={`0 0 ${width} ${height}`}
            height={height}
            width={width}>
            {children}
        </svg>
    )
    const Bar = ({fill='#000', x,y,height,width}) => (
        <rect fill={fill}  x={x} y={y} height={height} width={width} />
        
    )

    const greatestValue = values => values.reduce((acc,cur) =>(cur>acc? cur:acc), -Infinity)
    const BarChart = ({incomeandexpense}) =>
    {
        const barWidth = 80
        const barMargin = 30
        const width = incomeandexpense.length * (barWidth + barMargin)
        const height =greatestValue(incomeandexpense.map(datum => datum.quantity))
        return (
            <Chart height ={height} width = {width}>
                {incomeandexpense.map((datum, index)=>(
                <Bar
                        key={datum.name}
                        fill='teal'
                        x={index * (barWidth + barMargin)}
                        y={height - datum.quantity}
                        width={barWidth}
                        height={datum.quantity}
                        />
                ))}
            </Chart>
        )
    }
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
                <div className ='chart'>
                <BarChart incomeandexpense={ incomeandexpense}/>   
                </div>
            </div>
        </div>
    )
}

export default IncomeAndExpense
