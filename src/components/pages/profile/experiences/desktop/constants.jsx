export const PROYECTOS = [
    {
        name: 'Newline',
        bg: 'rgba(69, 201, 83, 0.21)',
        width: '34.1%',
        startDate: '07-2013',
        endDate: '06-2020'
    },
    {
        name: 'KuCoin & 8-Bit',
        bg: 'rgba(246, 107, 107, 0.21)',
        width: '13.96%',
        startDate: '01-2018',
        endDate: '08-2019'
    },
    {
        name: 'Bloyd',
        bg: 'rgba(145, 254, 236, 0.21)',
        width: '28.4%',
        startDate: '02-2020',
        endDate: '06-2023'
    },
    {
        name: 'Aditi & Claro',
        bg: 'rgba(129, 79, 235, 0.21)',
        width: '6.9%',
        startDate: '06-2023',
        endDate: '05-2024'
    },
    {
        name: 'Mercado Libre',
        bg: 'rgba(253, 225, 67, 0.21)',
        width: '11.08%',
        startDate: '05-2024',
        endDate: 'present'
    }
]

export const LineTimeBlock = ({id}) => {

    // Detectar si id es un numero par

    return (
        <div className="lineTime__bloque">
            <div className="año">

            {id % 2 === 0 ? (
             <span 
                style={{
                    position: 'absolute', 
                    top: '1.2rem'
                }}> 
                    {`${2012 + id}`}
                </span>
            ) : null}

            </div>
            {[...Array(6)].map((_, index) => (
                <div className="mes" key={index}/>
            ))}
        </div>
    )
}