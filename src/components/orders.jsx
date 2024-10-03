function Orders() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col mt-0">
            <h5 className="card-title">Orders</h5>
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
                className="feather feather-shopping-cart align-middle"
              >
                <circle cx={9} cy={21} r={1} />
                <circle cx={20} cy={21} r={1} />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
          </div>
        </div>
        <h1 className="mt-1 mb-3">64</h1>
        <div className="mb-0">
          <span className="text-danger">
            {" "}
            <i className="mdi mdi-arrow-bottom-right" /> -2.25%{" "}
          </span>
          <span className="text-muted">Since last week</span>
        </div>
      </div>
    </div>
  );
}

export default Orders;
