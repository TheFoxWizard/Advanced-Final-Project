import React from "react";


function RecordDetails(props) {
  console.log(props.albums);
    const recordId = props.match.params.id;
    //find returns an object
    const record = props.albums.find(u => u._id === recordId) || {};
    //rendering the HTML
    return( <div>
      <h2>Aritst:{record.artist}</h2>
      <h3>Title:{record.title}</h3>
      <h3>Year:{record.year}</h3>
      <h3>Value:{record.price}</h3>
    </div>
  );
}
export default RecordDetails;
