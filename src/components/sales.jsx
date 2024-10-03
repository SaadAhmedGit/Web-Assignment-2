function Sales() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col mt-0">
            <h5 className="card-title">Sales</h5>
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
                className="feather feather-truck align-middle"
              >
                <rect x={1} y={3} width={15} height={13} />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
          </div>
        </div>
        <h1 className="mt-1 mb-3">2.382</h1>
        <div className="mb-0">
          <span className="text-danger">
            {" "}
            <i className="mdi mdi-arrow-bottom-right" /> -3.65%{" "}
          </span>
          <span className="text-muted">Since last week</span>
        </div>
      </div>
    </div>
  )
}

export default Sales;
