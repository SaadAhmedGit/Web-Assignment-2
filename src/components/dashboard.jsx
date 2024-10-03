import BrowserUsage from "./BrowserUsage";
import Calendar from "./calendar";
import Earnings from "./earnings";
import Graph from "./graph";
import Orders from "./orders";
import Sales from "./sales";
import Visitors from "./visitors";

function Dashboard() {
  return (
    <main className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">
          <strong>Analytics</strong> Dashboard
        </h1>
        <div className="row">
          <div className="col-xl-6 col-xxl-5 d-flex">
            <div className="w-100">
              <div className="row">
                <div className="col-sm-6">
                  <Sales/>
                  <Visitors></Visitors>
                </div>
                <div className="col-sm-6">
                  <Earnings/>
                  <Orders/>
                </div>
              </div>
            </div>
          </div>
          <Graph/>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
            <div className="card flex-fill w-100">
              <div className="card-header">
                <h5 className="card-title mb-0">Browser Usage</h5>
              </div>
              <div className="card-body d-flex">
                <div className="align-self-center w-100">
                  <div className="py-3">
                    <div className="chart chart-xs">
                      <canvas id="chartjs-dashboard-pie" />
                    </div>
                  </div>
                  <table className="table mb-0">
                    <tbody>
                      <tr>
                        <td>Chrome</td>
                        <td className="text-end">4306</td>
                      </tr>
                      <tr>
                        <td>Firefox</td>
                        <td className="text-end">3801</td>
                      </tr>
                      <tr>
                        <td>IE</td>
                        <td className="text-end">1689</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
            <div className="card flex-fill w-100">
              <div className="card-header">
                <h5 className="card-title mb-0">Real-Time</h5>
              </div>
              <div className="card-body px-4">
                <div id="world_map" style={{ height: 350 }} />
              </div>
            </div>
          </div>
          <Calendar/>
        </div>
        <div className="row">
          <BrowserUsage/>
          <div className="col-12 col-lg-4 col-xxl-3 d-flex">
            <div className="card flex-fill w-100">
              <div className="card-header">
                <h5 className="card-title mb-0">Monthly Sales</h5>
              </div>
              <div className="card-body d-flex w-100">
                <div className="align-self-center chart chart-lg">
                  <canvas id="chartjs-dashboard-bar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
