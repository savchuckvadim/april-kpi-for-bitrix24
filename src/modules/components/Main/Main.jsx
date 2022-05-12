import BaseTableContainer from "../Tables/Base-Table/Base-Table-Container"
import StatisticsContainer from "../Statistics/Statistics-Container"
import './Main.css'



const Main = (props) => {

    return (
        <>
            <div className="main__desktop">
                {props.statistics
                    ? <StatisticsContainer />
                    : <BaseTableContainer />

                }
            </div>
            <div className="main__mobile">
                <StatisticsContainer />
            </div>
        </>

    )

}

export default Main