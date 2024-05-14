import { RupeeIcon } from "../../styles/Icons";
import Chart from "../Chart/Chart";
import "./Dashboard.css";

export const Home: React.FC = () => {
  return (
    <>
      <div className="col mainContainer">
        <div className="innerLayout">
          <h1 className="header">All Transactions</h1>
          <div className="contentWrapper" style={{ display: "none" }}>
            <div className="statsContainer">
              <div className="chartContainer">
                <Chart />
                <div className="amountContainer">
                  <div className="income">
                    <h2>Total Income</h2>
                    <p>
                      <RupeeIcon /> {100000}
                    </p>
                  </div>
                  <div className="expense">
                    <h2>Total Expense</h2>
                    <p>
                      <RupeeIcon /> {20000}
                    </p>
                  </div>
                  <div className="balance">
                    <h2>Total balance</h2>
                    <p>
                      <RupeeIcon /> {80000}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="historyContainer">
              {/* <History /> */}
              <h2 className="salaryTitle">
                Min<span>Salary</span>Max
              </h2>
              <div className="salaryItem">
                <p>sfsfsf</p>
                <p>fsfsf</p>
              </div>
              <h2 className="salaryTitle">
                Min<span>Expense</span>Max
              </h2>
              <div className="salaryItem">
                <p>sfsffsf</p>
                <p>sfsffsf</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
