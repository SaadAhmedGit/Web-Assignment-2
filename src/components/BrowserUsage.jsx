function BrowserUsage() {
  return (
    <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
      <div className="card flex-fill w-100">
        <div className="card-header">
          <h5 className="card-title mb-0">Browser Usage</h5>
        </div>
        <div className="card-body d-flex">
          <div className="align-self-center w-100">
            <div className="py-3">
              <div className="chart chart-xs">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className="" />
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className="" />
                  </div>
                </div>
                <canvas
                  id="chartjs-dashboard-pie"
                  style={{ display: "block", height: 200, width: 369 }}
                  width={738}
                  height={400}
                  className="chartjs-render-monitor"
                />
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
  );
}

export default BrowserUsage;
