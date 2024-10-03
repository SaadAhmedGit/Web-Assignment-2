function Visitors() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col mt-0">
            <h5 className="card-title">Visitors</h5>
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
                className="feather feather-users align-middle"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
          </div>
        </div>
        <h1 className="mt-1 mb-3">14.212</h1>
        <div className="mb-0">
          <span className="text-success">
            {" "}
            <i className="mdi mdi-arrow-bottom-right" /> 5.25%{" "}
          </span>
          <span className="text-muted">Since last week</span>
        </div>
      </div>
    </div>
  )
}

export default Visitors;
