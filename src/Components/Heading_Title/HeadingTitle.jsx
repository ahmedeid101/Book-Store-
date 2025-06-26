const HeadingTitle = ({title}) => {
    return ( 
    <div style={devStyle}>
        <h2 style={h2Style}>
            {title}
        </h2>

    </div> );
}

const devStyle = {
    padding: '10px 30px',
    backgroundColor: '#fff'
}

const h2Style = {
    color: '#1926d2',
    fontSize: '30px',
    fontWeight: '500',
    borderBottom: '2px solid #1926d2',
    width: 'max-content',
    paddingBottom: '5px'
}
 
export default HeadingTitle;