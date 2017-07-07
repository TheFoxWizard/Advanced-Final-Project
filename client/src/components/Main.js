import React from "react";
import AlbumsContainer from "../containers/AlbumsContainer";
import CreateThingsContainer from "../containers/CreateThingsContainer";
import EditThingsContainer from "../containers/EditThingsContainer";

function Albums() {
  return (
    <div>
      <div style={{float: "left", width: "33%"}}>
        <h1>Vehicles</h1>
        <AlbumsContainer />
      </div>
      <div style={{float: "left", width: "33%"}}>
        <CreateThingsContainer />
      </div>
      <div style={{float: "left", width: "33%"}}>
        <EditThingsContainer />
      </div>
    </div>
  );
}
export default Albums;
