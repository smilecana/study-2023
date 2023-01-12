import React from "react";
/*Class component
class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false,
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    // handleConfirm() {
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }

    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }))
    }
    render() {
        return (
            <button
                onClick = {this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "Checked" : "Check"}
            </button>
        );
    }
}
*/
function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }

    return (
        <button onClick = {handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "Checked" : "Check!"}
        </button>
    )
}
export default ConfirmButton;