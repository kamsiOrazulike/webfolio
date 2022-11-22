import './index.scss';

const AnimatedLetters = ({CharClass, CharArray, indx}) => {
    return (
        <span>
            {
                CharArray.map((char, i) => (
                    <span key={char + i} className={`${CharClass} _${i + indx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters