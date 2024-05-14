import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Chart: React.FC = () => {
  const income: any[] = [];
  const expense: any[] = [];

  const data = {
    labels: income.map((inc) => {
      return "";
    }),

    datasets: [
      {
        label: "Income",
        data: [
          ...income.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "green",
        tension: 0.2,
      },
      {
        lable: "Expense",
        data: [
          ...expense.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: "red",
        tension: .2
      },
    ],
  };

  return (
    <>
    <div className="chartbody">
        <Line data={data} />
    </div>
    </>
  )
};

export default Chart;
