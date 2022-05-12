import './Statistics.css'

const Statistics = (props) => {
    return (

        <div className="statistics-area">
            <h1 className='statistics__title'>Менеджер:   {props.managers}</h1>
            <h2 className='statistics__title'>{props.dates}  рабочих дней: {props.period} </h2>
            <div className='allData'>
                <div className='average'>
                    <h2 className='block__title'>В среднем в день:  </h2>
                    <div className='result__wrapper'><p>наборов номера:   </p> <span className='result'>{props.avargeNumberSets}</span> </div>
                    <div className='result__wrapper'><p>звонки 30 сек. и более:   </p> <span className='result'>  {props.avargeCallsOverThirdSek}</span> </div>
                    <div className='result__wrapper'><p>назначенных презентаций:   </p> <span className='result'>  {props.avargeAppointment}</span></div>
                    <div className='result__wrapper'><p>проведенных презентаций:   </p> <span className='result'>  {props.avargeCarried}</span> </div>
                    <div className='result__wrapper'><p>счета:  </p> <span className='result'>  {props.avargeChecks}</span> </div>
                    <div className='result__wrapper'><p>веерные счета:  </p> <span className='result'>  {props.avargeFanChecks}</span> </div>


                </div>

                <div className='conversion'>
                    <h2 className='block__title'>Конверсия %:</h2>

                    <div className='result__wrapper'><p>Из всех звонков, звонки более 30 сек:  </p>  <span className='result'>  {props.conversionCallsOverThirdSek} % </span> </div>
                    {/* <div><p>назначенных презентаций: {props.conversionAppointment} % </p></div> */}
                    <div className='result__wrapper'><p>Из звонков более 30 секунд -> презентаций:  </p>  <span className='result'> {props.conversionCarried} % </span> </div>
                    {/* <div><p>счета: {props.conversionChecks} %</p></div> */}
                    <div className='result__wrapper'><p>Из проведенных презентаций продаж:   </p> <span className='result'> {props.conversionSales} % </span> </div>
                </div>
            </div>




        </div>
    )

}
export default Statistics