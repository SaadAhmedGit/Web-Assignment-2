function Calendar() {
  return (
    <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
      <div className="card flex-fill">
        <div className="card-header">
          <h5 className="card-title mb-0">Calendar</h5>
        </div>
        <div className="card-body d-flex">
          <div className="align-self-center w-100">
            <div className="chart">
              <div
                id="datetimepicker-dashboard"
                className="flatpickr-input"
                readOnly="readonly"
              />
              <div className="flatpickr-calendar animate inline" tabIndex={-1}>
                <div className="flatpickr-months">
                  <span className="flatpickr-prev-month">
                    <span title="Previous month">«</span>
                  </span>
                  <div className="flatpickr-month">
                    <div className="flatpickr-current-month">
                      <select
                        className="flatpickr-monthDropdown-months"
                        aria-label="Month"
                        tabIndex={-1}
                      >
                        <option
                          className="flatpickr-monthDropdown-month"
                          value={0}
                          tabIndex={-1}
                        >
                          January
                        </option>
                        <option
                          className="flatpickr-monthDropdown-month"
                          value={1}
                          tabIndex={-1}
                        >
                          February
                        </option>
                        <option
                          className="flatpickr-monthDropdown-month"
                          value={2}
                          tabIndex={-1}
                        >
                          March
                        </option>
                        <option
                          className="flatpickr-monthDropdown-month"
                          value={3}
                          tabIndex={-1}
                        >
                          April
                        </option>
                        <option
                          className="flatpickr-monthDropdown-month"
                          value={4}
                          tabIndex={-1}
                        >
                          May
                        </option>
                        <option
                          className="flatpickr-monthDropdown-month"
                          value={5}
                          tabIndex={-1}
                        >
                          June
                        </option>
                        <option
                          className="flatpickr-monthDropdown-month"
                          value={6}
                          tabIndex={-1}
                        >
                          July
                        </option>
                        <option
                          className="flatpickr-monthDropdown-month"
                          value={7}
                          tabIndex={-1}
                        >
                          August
                        </option>
                        <option
                          className="flatpickr-monthDropdown-month"
                          value={8}
                          tabIndex={-1}
                        >
                          September
                        </option>
                        <option
                          className="flatpickr-monthDropdown-month"
                          value={9}
                          tabIndex={-1}
                        >
                          October
                        </option>
                        <option
                          className="flatpickr-monthDropdown-month"
                          value={10}
                          tabIndex={-1}
                        >
                          November
                        </option>
                        <option
                          className="flatpickr-monthDropdown-month"
                          value={11}
                          tabIndex={-1}
                        >
                          December
                        </option>
                      </select>
                      <div className="numInputWrapper">
                        <input
                          className="numInput cur-year"
                          type="number"
                          tabIndex={-1}
                          aria-label="Year"
                        />
                        <span className="arrowUp" />
                        <span className="arrowDown" />
                      </div>
                    </div>
                  </div>
                  <span className="flatpickr-next-month">
                    <span title="Next month">»</span>
                  </span>
                </div>
                <div className="flatpickr-innerContainer">
                  <div className="flatpickr-rContainer">
                    <div className="flatpickr-weekdays">
                      <div className="flatpickr-weekdaycontainer">
                        <span className="flatpickr-weekday">Sun</span>
                        <span className="flatpickr-weekday">Mon</span>
                        <span className="flatpickr-weekday">Tue</span>
                        <span className="flatpickr-weekday">Wed</span>
                        <span className="flatpickr-weekday">Thu</span>
                        <span className="flatpickr-weekday">Fri</span>
                        <span className="flatpickr-weekday">Sat</span>
                      </div>
                    </div>
                    <div className="flatpickr-days" tabIndex={-1}>
                      <div className="dayContainer">
                        <span
                          className="flatpickr-day prevMonthDay"
                          aria-label="September 29, 2024"
                          tabIndex={-1}
                        >
                          29
                        </span>
                        <span
                          className="flatpickr-day prevMonthDay"
                          aria-label="September 30, 2024"
                          tabIndex={-1}
                        >
                          30
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 1, 2024"
                          tabIndex={-1}
                        >
                          1
                        </span>
                        <span
                          className="flatpickr-day selected"
                          aria-label="October 2, 2024"
                          tabIndex={-1}
                        >
                          2
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 3, 2024"
                          tabIndex={-1}
                        >
                          3
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 4, 2024"
                          tabIndex={-1}
                        >
                          4
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 5, 2024"
                          tabIndex={-1}
                        >
                          5
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 6, 2024"
                          tabIndex={-1}
                        >
                          6
                        </span>
                        <span
                          className="flatpickr-day today"
                          aria-label="October 7, 2024"
                          aria-current="date"
                          tabIndex={-1}
                        >
                          7
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 8, 2024"
                          tabIndex={-1}
                        >
                          8
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 9, 2024"
                          tabIndex={-1}
                        >
                          9
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 10, 2024"
                          tabIndex={-1}
                        >
                          10
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 11, 2024"
                          tabIndex={-1}
                        >
                          11
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 12, 2024"
                          tabIndex={-1}
                        >
                          12
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 13, 2024"
                          tabIndex={-1}
                        >
                          13
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 14, 2024"
                          tabIndex={-1}
                        >
                          14
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 15, 2024"
                          tabIndex={-1}
                        >
                          15
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 16, 2024"
                          tabIndex={-1}
                        >
                          16
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 17, 2024"
                          tabIndex={-1}
                        >
                          17
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 18, 2024"
                          tabIndex={-1}
                        >
                          18
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 19, 2024"
                          tabIndex={-1}
                        >
                          19
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 20, 2024"
                          tabIndex={-1}
                        >
                          20
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 21, 2024"
                          tabIndex={-1}
                        >
                          21
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 22, 2024"
                          tabIndex={-1}
                        >
                          22
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 23, 2024"
                          tabIndex={-1}
                        >
                          23
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 24, 2024"
                          tabIndex={-1}
                        >
                          24
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 25, 2024"
                          tabIndex={-1}
                        >
                          25
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 26, 2024"
                          tabIndex={-1}
                        >
                          26
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 27, 2024"
                          tabIndex={-1}
                        >
                          27
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 28, 2024"
                          tabIndex={-1}
                        >
                          28
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 29, 2024"
                          tabIndex={-1}
                        >
                          29
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 30, 2024"
                          tabIndex={-1}
                        >
                          30
                        </span>
                        <span
                          className="flatpickr-day"
                          aria-label="October 31, 2024"
                          tabIndex={-1}
                        >
                          31
                        </span>
                        <span
                          className="flatpickr-day nextMonthDay"
                          aria-label="November 1, 2024"
                          tabIndex={-1}
                        >
                          1
                        </span>
                        <span
                          className="flatpickr-day nextMonthDay"
                          aria-label="November 2, 2024"
                          tabIndex={-1}
                        >
                          2
                        </span>
                        <span
                          className="flatpickr-day nextMonthDay"
                          aria-label="November 3, 2024"
                          tabIndex={-1}
                        >
                          3
                        </span>
                        <span
                          className="flatpickr-day nextMonthDay"
                          aria-label="November 4, 2024"
                          tabIndex={-1}
                        >
                          4
                        </span>
                        <span
                          className="flatpickr-day nextMonthDay"
                          aria-label="November 5, 2024"
                          tabIndex={-1}
                        >
                          5
                        </span>
                        <span
                          className="flatpickr-day nextMonthDay"
                          aria-label="November 6, 2024"
                          tabIndex={-1}
                        >
                          6
                        </span>
                        <span
                          className="flatpickr-day nextMonthDay"
                          aria-label="November 7, 2024"
                          tabIndex={-1}
                        >
                          7
                        </span>
                        <span
                          className="flatpickr-day nextMonthDay"
                          aria-label="November 8, 2024"
                          tabIndex={-1}
                        >
                          8
                        </span>
                        <span
                          className="flatpickr-day nextMonthDay"
                          aria-label="November 9, 2024"
                          tabIndex={-1}
                        >
                          9
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
