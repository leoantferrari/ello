import React from "react";
import EditAccount from "./EditAccount.component";

const EditAccountWrapper: React.FC = (props) => {
    return (
    <div>
        <h3>Edit Account</h3>
        <p>Please look over your account information:</p>
        <EditAccount hasEditButton={true}/>
    </div>)
}
export default EditAccountWrapper