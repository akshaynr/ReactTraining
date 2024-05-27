import './TextError.css';

const TextError = ({ children }) => {
    return (
        <div className="error mt-2">
            {children}
        </div>
    )
}

export default TextError;