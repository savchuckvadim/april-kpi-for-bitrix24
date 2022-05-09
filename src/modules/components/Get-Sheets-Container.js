import GetSheets from "./GetSheets"
import {
    connect
} from "react-redux"
import React from "react"
import { getAllSheets } from "../redux/reducers/sheets-reducer"

const mapStateToProps = (state) => {


    return {
        allRows: state.sheets.showRows,
        currentManager: state.sheets.currentManager,
        isButtonAction:state.sheets.isButtonAction
     

    }
}
class GetSheetsContainer extends React.Component {

    componentDidMount() {
        this.props.getAllSheets(this.props.isButtonAction)
    }
    render() {

        return (
            <GetSheets
                allRows={this.props.allRows}
                currentManager={this.props.currentManager}
            />
   
        )
    }
}

export default connect(mapStateToProps, {
    getAllSheets

})(GetSheetsContainer)