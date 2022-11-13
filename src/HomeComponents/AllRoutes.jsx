import { Route,Routes } from "react-router-dom";
import Medicine  from "./Medicine";
import Login from "./Login";
import Covid19 from "./Covid19"
import AllData from "./AllData"
function AllRoutes()
{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Medicine />}></Route>
                <Route  path="/login" element={<Login />}></Route>
                <Route  path="/covid" element={<Covid19 />}></Route>
                <Route path="/all" element={<AllData/>}></Route>
            </Routes>
        </div>

    )
}
export default AllRoutes;