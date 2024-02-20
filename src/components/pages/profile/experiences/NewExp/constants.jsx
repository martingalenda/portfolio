export const PROYECTOS = [
    {
        name: 'Newline',
        bg: 'rgba(69, 201, 83, 0.21)',
        width: '42.1%',
        mr: ''
    },
    {
        name: 'KuCoin & 8-Bit',
        bg: 'rgba(246, 107, 107, 0.21)',
        width: '15.96%',
        mr: '3.63rem'
    },
    {
        name: 'Bloyd',
        bg: 'rgba(182, 201, 69, 0.21)',
        width: '31.05%',
        mr: ''
    },
    {
        name: 'Resolvit & Claro',
        bg: 'rgba(129, 79, 235, 0.21)',
        width: '7.08%',
        mr: ''
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
                    {`${2011 + id}`}
                </span>
            ) : null}

            </div>
            {[...Array(6)].map((_, index) => (
                <div className="mes" key={index}/>
            ))}
        </div>
    )
}