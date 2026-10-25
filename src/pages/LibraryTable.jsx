

function LibraryTable(){
    return(
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12">
                    <center><h3>3.Library</h3></center>
                    <div className="box border border-5 rounded-3 border-dark  p-3">
                        <div className="header-box">
                            <form>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-3">
                                        <label htmlFor="stuName" className="col-form-label">Student Name:</label>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <select id="stuName" className="form-select">
                                        <option selected value="">select</option>
                                        <option>Abhiram</option>
                                        <option>Mukesh</option>
                                        <option>Uday</option>
                                    </select>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-12 col-md-3">
                                        <label htmlFor="bookName" className="col-form-label">Book Name:</label>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <select id="bookName" className="form-select">
                                        <option selected value="">select</option>
                                        <option>Abhiram</option>
                                        <option>Mukesh</option>
                                        <option>Uday</option>
                                    </select>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-12 col-md-3">
                                        <label htmlFor="startDate">Start Date:</label>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <input type="date" id="startDate" className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="row align-items-center mt-3">
                                    <div className="col-12 col-md-3">
                                        <label htmlFor="endDate">End Date:</label>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <input type="date" id="endDate" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="row align-items-center justify-content-center gap-3 mt-3">
                                    <div className="col-12 col-md-4">
                                        <button className="btn btn-outline-primary w-100">Save</button>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <button className="btn btn-outline-danger w-100">Cancle</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Library Table */}
                        <div className="footer mt-5">
                            <div className="row">
                                <center>
                                    <h3>Library Table</h3>
                                </center>
                                <div className="d-flex justify-content-end">
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <input type="search" className="form-control"></input>
                                            <span className="input-group-text">
                                                <i className="bi bi-search"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="p-3 table-responsive">
                                    <table className="table  text-center align-middle text-nowrap table-warning table-hover table-bordered border-primary mt-3">
                                      <thead>
                                        <tr>
                                            <th>S.NO</th>
                                            <th>S.NAME</th>
                                            <th>B.NAME</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th> Action</th>
                                            
                                        </tr>

                                      </thead>
                                        
                                    <tbody className="">
                                        <tr>
                                            <td>1</td>
                                            <td>Abhiram</td>
                                            <td>Abhiram</td>
                                            <td>24-10-2026</td>
                                            <td>26-10-2026</td>
                                            <td className="text-center">
                                                <button className="btn btn-primary">Edit</button>
                                                <button className="btn btn-danger">Delite</button>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Abhiram</td>
                                            <td>Abhiram</td>
                                            <td>24-10-2026</td>
                                            <td>26-10-2026</td>
                                            <td className="text-center">
                                                <button className="btn btn-primary">Edit</button>
                                                <button className="btn btn-danger">Delite</button>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>

                                </div>
                                
                                
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default LibraryTable;