import {PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  return (
    <div className="pie-chart-container">
      <h1 className="heading">Vaccination by gender</h1>
      <div className="pie-chart-responsive-container">
        <PieChart width={1000} height={300}>
          <Pie
            cx="50%"
            cy="60p%"
            startAngle={180}
            endAngle={0}
            data={vaccinationByGender}
            dataKey="count"
            innerRadius="30%"
            outerRadius="60%"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
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

export default VaccinationByGender
