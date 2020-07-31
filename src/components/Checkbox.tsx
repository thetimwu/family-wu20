import React from "react";
import firebase from "../firebase";

const Checkbox = (props: { id: string }) => {
  const archiveTask = () => {
    firebase
      .firestore()
      .collection("tasks")
      .doc(props.id)
      .update({ archived: true });
  };
  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox" />
    </div>
  );
};

export default Checkbox;
