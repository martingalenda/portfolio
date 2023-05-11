function CircularTxt({ text, children }) {
    const lenght = text.length;
    const deg = 360 / lenght;
  
    return (
      <div className="circularTxt">
        <div className="circularTxt__wrapper">
          <div className="circularTxt__text">
            <p>
              {text.split("").map((letter, i) => (
                <span
                  key={i}
                  style={{
                    transform: `rotate(${deg * i}deg)`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </p>
          </div>
          {children}
        </div>
      </div>
    );
  }
  
  export default CircularTxt;