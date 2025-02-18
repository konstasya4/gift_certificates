import SertificateList from "./SertificateList";
import "./SertificateStyle.css";
import data from "../../services/data.json"

export default function SertificatePage() {
  return (
    <div className="body-background">
      <div>
        <div className="title_cert">Дарите подарки для самых близких</div>
      </div>
      <SertificateList listSertificates={data} />
    </div>
  );
}
