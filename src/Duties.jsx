import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuid } from "uuid";

function Duties({ duties }) {
  return (
    <div>
      {duties.map((duty, index) => {
        return (
          <div key={uuid()} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Duties;
