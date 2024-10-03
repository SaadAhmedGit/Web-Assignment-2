function Earnings() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col mt-0">
            <h5 className="card-title">Earnings</h5>
          </div>
          <div className="col-auto">
            <div className="stat text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-dollar-sign align-middle"
              >
                <line x1={12} y1={1} x2={12} y2={23} />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
          </div>
        </div>
        <h1 className="mt-1 mb-3">$21.300</h1>
        <div className="mb-0">
          <span className="text-success">
            {" "}
            <i className="mdi mdi-arrow-bottom-right" /> 6.65%{" "}
          </span>
          <span className="text-muted">Since last week</span>
        </div>
      </div>
    </div>
  );
}

export default Earnings;
