import BaseTableContainer from "../Tables/Base-Table/Base-Table-Container"
import StatisticsContainer from "../Statistics/Statistics-Container"


const Main = (props) => {
    if (props.statistics) {
        return (
            <>

                <StatisticsContainer />
            </>
        )
    } else {
        return (
            <>
                <BaseTableContainer />
              
            </>
        )
    }

}

export default Main