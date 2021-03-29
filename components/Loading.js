import { Grid } from "@material-ui/core";
import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color="blue" size={60} />
      </div>
    </center>
  );
}

export default Loading;
