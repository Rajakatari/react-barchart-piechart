import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <div className="pie-chart-container">
      <h1 className="heading">Vaccination by Age</h1>
      <div className="pie-chart-responsive-container">
        <PieChart width={350} height={300}>
          <Pie
            cx="70%"
            cy="40%"
            data={vaccinationByAge}
            innerRadius="0%"
            outerRadius="60%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2cc6c6" />
            <Cell name="44-60" fill="#6c757d" />
            <Cell name="60 Above" fill="#5a8dee" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </div>
    </div>
  )
}

export default VaccinationByAge
