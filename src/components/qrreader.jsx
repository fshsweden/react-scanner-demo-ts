import React from "react";
import QrReader from "react-qr-scanner";

class QRScan extends React.Component {

    state = {
        delay: 100,
        result: "No result"
    };

    handleScan = (data) => {
        this.setState({
            result: data
        });
    };

    handleError = (err) => {
        console.error(err);
    };

    render() {

        const previewStyle = {
            height: 240,
            width: 320,
        }

        return (
            <div>
                
                <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    facingMode={"rear"}

                    onScan={this.handleScan}
                />
                <p>{this.state.result}</p>
            </div>
        );
    }
}

export default QRScan;
